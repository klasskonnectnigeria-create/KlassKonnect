import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pg from 'pg';
import authRoutes from './routes/auth.js';
import contentRoutes from './routes/content.js';
import progressRoutes from './routes/progress.js';
import agentRoutes from './routes/agents.js';
import leaderboardRoutes from './routes/leaderboard.js';
import gamificationRoutes from './routes/gamification.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Database connection pool
export const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://postgres:password@localhost:5432/nerdc_ai_tutor'
});

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/content', contentRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/agents', agentRoutes);
app.use('/api/leaderboard', leaderboardRoutes);
app.use('/api/gamification', gamificationRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`✓ Backend server running on http://localhost:${PORT}`);
  console.log(`✓ API ready at http://localhost:${PORT}/api`);
});
