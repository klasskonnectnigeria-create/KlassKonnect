-- Students table
CREATE TABLE IF NOT EXISTS students (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  full_name VARCHAR(255) NOT NULL,
  grade VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  password_reset_token TEXT,
  password_reset_expires TIMESTAMP
);

-- Themes (e.g., NUMBER NUMERATION, BASIC OPERATIONS)
CREATE TABLE IF NOT EXISTS themes (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  subject VARCHAR(100) DEFAULT 'Mathematics',
  grade VARCHAR(50) DEFAULT 'Primary 4',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Topics (specific topics under themes)
CREATE TABLE IF NOT EXISTS topics (
  id SERIAL PRIMARY KEY,
  theme_id INTEGER REFERENCES themes(id),
  name VARCHAR(255) NOT NULL,
  learning_outcome TEXT NOT NULL,
  focal_competency TEXT,
  sequence_order INTEGER,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Content sections (Knowledge, Skills, Competencies)
CREATE TABLE IF NOT EXISTS content (
  id SERIAL PRIMARY KEY,
  topic_id INTEGER REFERENCES topics(id),
  section_type VARCHAR(100) NOT NULL, -- 'knowledge', 'skills', 'competencies', 'values'
  content_text TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Learning activities for each topic
CREATE TABLE IF NOT EXISTS learning_activities (
  id SERIAL PRIMARY KEY,
  topic_id INTEGER REFERENCES topics(id),
  activity_description TEXT NOT NULL,
  activity_type VARCHAR(100), -- 'guided', 'group', 'individual'
  resources VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Evaluation guides
CREATE TABLE IF NOT EXISTS evaluation_guides (
  id SERIAL PRIMARY KEY,
  topic_id INTEGER REFERENCES topics(id),
  evaluation_criteria TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Student progress tracking
CREATE TABLE IF NOT EXISTS student_progress (
  id SERIAL PRIMARY KEY,
  student_id INTEGER REFERENCES students(id) ON DELETE CASCADE,
  topic_id INTEGER REFERENCES topics(id),
  status VARCHAR(50) DEFAULT 'not_started', -- 'not_started', 'in_progress', 'completed'
  understanding_level INTEGER DEFAULT 0, -- 0-100 score
  attempts INTEGER DEFAULT 0,
  last_accessed TIMESTAMP,
  completed_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(student_id, topic_id)
);

-- Conversation logs (for tracking AI interactions)
CREATE TABLE IF NOT EXISTS conversation_logs (
  id SERIAL PRIMARY KEY,
  student_id INTEGER REFERENCES students(id) ON DELETE CASCADE,
  topic_id INTEGER REFERENCES topics(id),
  user_message TEXT NOT NULL,
  ai_response TEXT NOT NULL,
  agent_type VARCHAR(100), -- 'tutor', 'assessment', 'practice'
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Gamification stats (points, levels, streaks)
CREATE TABLE IF NOT EXISTS gamification_stats (
  id SERIAL PRIMARY KEY,
  student_id INTEGER UNIQUE REFERENCES students(id) ON DELETE CASCADE,
  total_points INTEGER DEFAULT 0,
  level INTEGER DEFAULT 1,
  current_streak INTEGER DEFAULT 0,
  longest_streak INTEGER DEFAULT 0,
  last_activity_date DATE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Student badges (earned achievements)
CREATE TABLE IF NOT EXISTS student_badges (
  id SERIAL PRIMARY KEY,
  student_id INTEGER REFERENCES students(id) ON DELETE CASCADE,
  badge_type VARCHAR(100) NOT NULL,
  badge_name VARCHAR(255) NOT NULL,
  badge_description TEXT,
  metadata JSONB,
  earned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(student_id, badge_type)
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_topics_theme ON topics(theme_id);
CREATE INDEX IF NOT EXISTS idx_content_topic ON content(topic_id);
CREATE INDEX IF NOT EXISTS idx_progress_student ON student_progress(student_id);
CREATE INDEX IF NOT EXISTS idx_progress_topic ON student_progress(topic_id);
CREATE INDEX IF NOT EXISTS idx_conversation_student ON conversation_logs(student_id);
CREATE INDEX IF NOT EXISTS idx_gamification_points ON gamification_stats(total_points DESC);
CREATE INDEX IF NOT EXISTS idx_gamification_level ON gamification_stats(level DESC);
CREATE INDEX IF NOT EXISTS idx_gamification_streak ON gamification_stats(current_streak DESC);
CREATE INDEX IF NOT EXISTS idx_student_badges_student ON student_badges(student_id);
