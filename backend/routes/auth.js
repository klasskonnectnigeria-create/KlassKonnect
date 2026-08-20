import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { pool } from '../server.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

// Sign up
router.post('/signup', async (req, res) => {
  const { email, password, fullName, grade } = req.body;

  try {
    const existingStudent = await pool.query(
      'SELECT * FROM students WHERE email = $1',
      [email]
    );

    if (existingStudent.rows.length > 0) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await pool.query(
      'INSERT INTO students (email, password_hash, full_name, grade) VALUES ($1, $2, $3, $4) RETURNING id, email, full_name, grade',
      [email, hashedPassword, fullName, grade]
    );

    const student = result.rows[0];
    const token = jwt.sign({ id: student.id }, process.env.JWT_SECRET || 'your-secret-key');

    res.status(201).json({
      token,
      student: {
        id: student.id,
        email: student.email,
        fullName: student.full_name,
        grade: student.grade
      }
    });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ error: 'Error creating account' });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query(
      'SELECT * FROM students WHERE email = $1',
      [email]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const student = result.rows[0];
    const validPassword = await bcrypt.compare(password, student.password_hash);

    if (!validPassword) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: student.id }, process.env.JWT_SECRET || 'your-secret-key');

    res.json({
      token,
      student: {
        id: student.id,
        email: student.email,
        fullName: student.full_name,
        grade: student.grade
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Error logging in' });
  }
});


// Request password reset
router.post('/forgot-password', async (req, res) => {
  const { email } = req.body;

  try {
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    const normalizedEmail = email.toLowerCase().trim();

    const result = await pool.query(
      'SELECT id FROM students WHERE email = $1',
      [normalizedEmail]
    );

    // Do not reveal whether an email is registered.
    if (result.rows.length === 0) {
      return res.json({
        message: 'If an account exists for this email, a reset request has been created.'
      });
    }

    const crypto = await import('crypto');
    const token = crypto.randomBytes(32).toString('hex');
    const expires = new Date(Date.now() + 30 * 60 * 1000);

    await pool.query(
      `UPDATE students
       SET password_reset_token = $1,
           password_reset_expires = $2
       WHERE id = $3`,
      [token, expires, result.rows[0].id]
    );

    // Development only — replace with email delivery before production.
    console.log('🔐 PASSWORD RESET TOKEN:', token);

    res.json({
      message: 'Password reset request created.',
      developmentToken: token
    });
  } catch (error) {
    console.error('Forgot password error:', error);
    res.status(500).json({
      error: 'Unable to process password reset request'
    });
  }
});

// Reset password
router.post('/reset-password', async (req, res) => {
  const { token, newPassword } = req.body;

  try {
    if (!token || !newPassword) {
      return res.status(400).json({
        error: 'Reset token and new password are required'
      });
    }

    if (newPassword.length < 6) {
      return res.status(400).json({
        error: 'Password must be at least 6 characters'
      });
    }

    const result = await pool.query(
      `SELECT id
       FROM students
       WHERE password_reset_token = $1
         AND password_reset_expires > CURRENT_TIMESTAMP`,
      [token]
    );

    if (result.rows.length === 0) {
      return res.status(400).json({
        error: 'Invalid or expired reset token'
      });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await pool.query(
      `UPDATE students
       SET password_hash = $1,
           password_reset_token = NULL,
           password_reset_expires = NULL,
           updated_at = CURRENT_TIMESTAMP
       WHERE id = $2`,
      [hashedPassword, result.rows[0].id]
    );

    res.json({
      message: 'Password reset successfully'
    });
  } catch (error) {
    console.error('Reset password error:', error);
    res.status(500).json({
      error: 'Unable to reset password'
    });
  }
});

// Quick test login (development only - no password required)
router.post('/test-login', async (req, res) => {
  try {
    const { email } = req.body || {};
    const testEmail = email || 'test@example.com';

    const result = await pool.query(
      'SELECT id, email, full_name, grade FROM students WHERE email = $1',
      [testEmail]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: `Test user with email ${testEmail} not found. Run /api/seed-test-data first.` });
    }

    const student = result.rows[0];
    const token = jwt.sign({ id: student.id }, process.env.JWT_SECRET || 'your-secret-key');

    res.json({
      token,
      student: {
        id: student.id,
        email: student.email,
        fullName: student.full_name,
        grade: student.grade
      }
    });
  } catch (error) {
    console.error('Test login error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Get current student
router.get('/me', verifyToken, async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT id, email, full_name, grade FROM students WHERE id = $1',
      [req.studentId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Student not found' });
    }

    const student = result.rows[0];
    res.json({
      id: student.id,
      email: student.email,
      fullName: student.full_name,
      grade: student.grade
    });
  } catch (error) {
    console.error('Error fetching student:', error);
    res.status(500).json({ error: 'Error fetching student data' });
  }
});

export default router;
