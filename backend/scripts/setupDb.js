import pg from 'pg';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const client = new pg.Client({
  connectionString: process.env.DATABASE_URL || 'postgresql://postgres:password@localhost:5432/nerdc_ai_tutor'
});

async function setupDatabase() {
  try {
    await client.connect();
    console.log('Connected to database');

    const schema = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf-8');
    await client.query(schema);

    console.log('✓ Database schema created successfully');
    await client.end();
  } catch (error) {
    console.error('Error setting up database:', error);
    process.exit(1);
  }
}

setupDatabase();
