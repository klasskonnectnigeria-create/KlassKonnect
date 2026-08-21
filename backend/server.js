import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const envPath = resolve(__dirname, '.env');

console.log('[server.js] Loading .env from:', envPath);
const result = dotenv.config({ path: envPath });
console.log('[server.js] Dotenv result:', result.error ? `ERROR: ${result.error.message}` : 'SUCCESS');
console.log('[server.js] CLAUDE_API_KEY loaded:', process.env.CLAUDE_API_KEY ? '✓ YES' : '✗ NO');

import express from 'express';
import cors from 'cors';
import pg from 'pg';
import authRoutes from './routes/auth.js';
import contentRoutes from './routes/content.js';
import progressRoutes from './routes/progress.js';
import agentRoutes from './routes/agents.js';
import leaderboardRoutes from './routes/leaderboard.js';
import gamificationRoutes from './routes/gamification.js';
import seedRoutes from './routes/seed.js';

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
app.use('/api', seedRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

// Debug endpoint - check API key configuration
app.get('/api/debug/config', (req, res) => {
  const apiKey = process.env.CLAUDE_API_KEY;
  const demoMode = process.env.DEMO_MODE;

  res.json({
    apiKeyExists: !!apiKey,
    apiKeyLength: apiKey ? apiKey.length : 0,
    apiKeyPrefix: apiKey ? `${apiKey.substring(0, 10)}...${apiKey.substring(apiKey.length - 5)}` : 'NONE',
    demoModeEnabled: demoMode === 'true',
    environment: process.env.NODE_ENV || 'production',
    timestamp: new Date().toISOString()
  });
});

// Direct test endpoint - test Claude API directly
app.get('/api/debug/test-claude', async (req, res) => {
  try {
    const Anthropic = (await import('@anthropic-ai/sdk')).default;
    const apiKey = process.env.CLAUDE_API_KEY;

    console.log('[test-claude] Initializing client...');
    const client = new Anthropic({ apiKey });

    console.log('[test-claude] Calling API...');
    const response = await client.messages.create({
      model: 'claude-opus-5',
      max_tokens: 100,
      system: 'You are a helpful math tutor.',
      messages: [
        { role: 'user', content: 'What is 2+2?' }
      ]
    });

    console.log('[test-claude] Success!');
    res.json({
      success: true,
      message: response.content[0]?.text || 'NO TEXT',
      usage: response.usage
    });
  } catch (error) {
    console.error('[test-claude] Error:', error);
    res.status(500).json({
      success: false,
      error: error.message,
      errorName: error.name,
      errorStatus: error.status,
      fullError: JSON.stringify(error, null, 2)
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`✓ Backend server running on http://localhost:${PORT}`);
  console.log(`✓ API ready at http://localhost:${PORT}/api`);
});
