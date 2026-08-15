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
