import * as SQLite from 'expo-sqlite';

let db = null;

const SCHEMA_VERSION = 1;

const TABLES_SQL = `
-- Students table
CREATE TABLE IF NOT EXISTS students (
  id INTEGER PRIMARY KEY,
  email TEXT UNIQUE,
  full_name TEXT,
  grade TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Themes table
CREATE TABLE IF NOT EXISTS themes (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  subject TEXT DEFAULT 'Mathematics',
  grade TEXT DEFAULT 'Primary 4',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Topics table
CREATE TABLE IF NOT EXISTS topics (
  id INTEGER PRIMARY KEY,
  theme_id INTEGER,
  name TEXT NOT NULL,
  learning_outcome TEXT,
  focal_competency TEXT,
  sequence_order INTEGER,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY(theme_id) REFERENCES themes(id)
);

-- Content table
CREATE TABLE IF NOT EXISTS content (
  id INTEGER PRIMARY KEY,
  topic_id INTEGER,
  section_type TEXT NOT NULL,
  content_text TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY(topic_id) REFERENCES topics(id)
);

-- Learning activities table
CREATE TABLE IF NOT EXISTS learning_activities (
  id INTEGER PRIMARY KEY,
  topic_id INTEGER,
  activity_description TEXT,
  activity_type TEXT,
  resources TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY(topic_id) REFERENCES topics(id)
);

-- Evaluation guides table
CREATE TABLE IF NOT EXISTS evaluation_guides (
  id INTEGER PRIMARY KEY,
  topic_id INTEGER,
  evaluation_criteria TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY(topic_id) REFERENCES topics(id)
);

-- Student progress table
CREATE TABLE IF NOT EXISTS student_progress (
  id INTEGER PRIMARY KEY,
  student_id INTEGER,
  topic_id INTEGER,
  status TEXT DEFAULT 'not_started',
  understanding_level INTEGER DEFAULT 0,
  attempts INTEGER DEFAULT 0,
  last_accessed DATETIME,
  completed_at DATETIME,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(student_id, topic_id),
  FOREIGN KEY(student_id) REFERENCES students(id),
  FOREIGN KEY(topic_id) REFERENCES topics(id)
);

-- Conversation logs table
CREATE TABLE IF NOT EXISTS conversation_logs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  student_id INTEGER,
  topic_id INTEGER,
  user_message TEXT,
  ai_response TEXT,
  agent_type TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY(student_id) REFERENCES students(id),
  FOREIGN KEY(topic_id) REFERENCES topics(id)
);

-- Offline queue table
CREATE TABLE IF NOT EXISTS offline_queue (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  action_type TEXT,
  endpoint TEXT,
  method TEXT,
  body TEXT,
  timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
  status TEXT DEFAULT 'pending'
);

-- Sync metadata table
CREATE TABLE IF NOT EXISTS sync_metadata (
  student_id INTEGER PRIMARY KEY,
  last_sync DATETIME,
  server_version INTEGER DEFAULT 0,
  sync_status TEXT DEFAULT 'idle'
);

-- Conflicts table
CREATE TABLE IF NOT EXISTS conflicts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  entity_type TEXT,
  entity_id INTEGER,
  field TEXT,
  local_value TEXT,
  server_value TEXT,
  resolved_value TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Gamification: Student stats
CREATE TABLE IF NOT EXISTS gamification_stats (
  id INTEGER PRIMARY KEY,
  student_id INTEGER UNIQUE,
  total_points INTEGER DEFAULT 0,
  level INTEGER DEFAULT 1,
  current_streak INTEGER DEFAULT 0,
  longest_streak INTEGER DEFAULT 0,
  last_activity_date DATETIME,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY(student_id) REFERENCES students(id)
);

-- Gamification: Badges earned
CREATE TABLE IF NOT EXISTS badges (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  student_id INTEGER,
  badge_type TEXT,
  badge_name TEXT,
  badge_description TEXT,
  metadata TEXT,
  earned_date DATETIME DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(student_id, badge_type),
  FOREIGN KEY(student_id) REFERENCES students(id)
);

-- Gamification: Daily activity log
CREATE TABLE IF NOT EXISTS daily_activity (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  student_id INTEGER,
  activity_date DATE,
  points_earned INTEGER DEFAULT 0,
  activities_count INTEGER DEFAULT 0,
  synced INTEGER DEFAULT 0,
  UNIQUE(student_id, activity_date),
  FOREIGN KEY(student_id) REFERENCES students(id)
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_topics_theme ON topics(theme_id);
CREATE INDEX IF NOT EXISTS idx_content_topic ON content(topic_id);
CREATE INDEX IF NOT EXISTS idx_progress_student ON student_progress(student_id);
CREATE INDEX IF NOT EXISTS idx_progress_topic ON student_progress(topic_id);
CREATE INDEX IF NOT EXISTS idx_conversation_student ON conversation_logs(student_id);
`;

export const getDatabase = () => {
  if (!db) {
    throw new Error('Database not initialized. Call initializeDatabase first.');
  }
  return db;
};

export const initializeDatabase = async () => {
  try {
    db = await SQLite.openDatabaseAsync('nerdc_tutor.db');

    // Check schema version
    const result = await db.getFirstAsync('PRAGMA user_version');
    const currentVersion = result ? result.user_version : 0;

    if (currentVersion < SCHEMA_VERSION) {
      // Execute all table creation statements
      const statements = TABLES_SQL.split(';').filter(s => s.trim());
      for (const statement of statements) {
        if (statement.trim()) {
          await db.execAsync(statement.trim());
        }
      }

      // Set schema version
      await db.execAsync(`PRAGMA user_version = ${SCHEMA_VERSION}`);
      console.log('Database initialized successfully');
    }

    return db;
  } catch (error) {
    console.error('Error initializing database:', error);
    throw error;
  }
};

// ==================== THEME OPERATIONS ====================

export const getThemes = async () => {
  const db = getDatabase();
  try {
    const result = await db.getAllAsync('SELECT * FROM themes ORDER BY id ASC');
    return result || [];
  } catch (error) {
    console.error('Error fetching themes:', error);
    return [];
  }
};

export const saveThemes = async (themes) => {
  const db = getDatabase();
  try {
    // Clear existing themes
    await db.execAsync('DELETE FROM themes');

    // Insert new themes
    for (const theme of themes) {
      await db.runAsync(
        'INSERT INTO themes (id, name, description, subject, grade, created_at) VALUES (?, ?, ?, ?, ?, ?)',
        [
          theme.id,
          theme.name,
          theme.description || null,
          theme.subject || 'Mathematics',
          theme.grade || 'Primary 4',
          new Date().toISOString()
        ]
      );
    }
    console.log(`Saved ${themes.length} themes to database`);
  } catch (error) {
    console.error('Error saving themes:', error);
    throw error;
  }
};

// ==================== TOPIC OPERATIONS ====================

export const getTopics = async (themeId) => {
  const db = getDatabase();
  try {
    const result = await db.getAllAsync(
      'SELECT * FROM topics WHERE theme_id = ? ORDER BY sequence_order ASC',
      [themeId]
    );
    return result || [];
  } catch (error) {
    console.error('Error fetching topics:', error);
    return [];
  }
};

export const getTopic = async (topicId) => {
  const db = getDatabase();
  try {
    const topic = await db.getFirstAsync(
      'SELECT * FROM topics WHERE id = ?',
      [topicId]
    );

    if (!topic) return null;

    // Get content sections
    const contentSections = await db.getAllAsync(
      'SELECT section_type, content_text FROM content WHERE topic_id = ?',
      [topicId]
    );

    // Get learning activities
    const activities = await db.getAllAsync(
      'SELECT activity_description, activity_type, resources FROM learning_activities WHERE topic_id = ?',
      [topicId]
    );

    // Get evaluation guide
    const evaluation = await db.getFirstAsync(
      'SELECT evaluation_criteria FROM evaluation_guides WHERE topic_id = ?',
      [topicId]
    );

    // Build content object
    const content = {};
    contentSections.forEach(section => {
      content[section.section_type] = section.content_text;
    });

    return {
      ...topic,
      content,
      learningActivities: activities,
      evaluationGuide: evaluation?.evaluation_criteria || ''
    };
  } catch (error) {
    console.error('Error fetching topic details:', error);
    return null;
  }
};

export const saveTopics = async (themeId, topics) => {
  const db = getDatabase();
  try {
    // Clear existing topics for this theme
    await db.execAsync(`DELETE FROM topics WHERE theme_id = ${themeId}`);

    // Insert new topics
    for (const topic of topics) {
      await db.runAsync(
        'INSERT INTO topics (id, theme_id, name, learning_outcome, focal_competency, sequence_order, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [
          topic.id,
          themeId,
          topic.name,
          topic.learning_outcome || null,
          topic.focal_competency || null,
          topic.sequence_order || 0,
          new Date().toISOString()
        ]
      );
    }
    console.log(`Saved ${topics.length} topics for theme ${themeId}`);
  } catch (error) {
    console.error('Error saving topics:', error);
    throw error;
  }
};

export const saveTopic = async (topicDetails) => {
  const db = getDatabase();
  try {
    const { id, theme_id, name, learning_outcome, focal_competency, content, learningActivities, evaluationGuide } = topicDetails;

    // Upsert topic
    await db.runAsync(
      `INSERT INTO topics (id, theme_id, name, learning_outcome, focal_competency, created_at)
       VALUES (?, ?, ?, ?, ?, ?)
       ON CONFLICT(id) DO UPDATE SET learning_outcome=?, focal_competency=?`,
      [id, theme_id, name, learning_outcome, focal_competency, new Date().toISOString(), learning_outcome, focal_competency]
    );

    // Delete and re-insert content sections
    await db.execAsync(`DELETE FROM content WHERE topic_id = ${id}`);
    if (content) {
      for (const [sectionType, contentText] of Object.entries(content)) {
        await db.runAsync(
          'INSERT INTO content (topic_id, section_type, content_text, created_at) VALUES (?, ?, ?, ?)',
          [id, sectionType, contentText, new Date().toISOString()]
        );
      }
    }

    // Delete and re-insert learning activities
    await db.execAsync(`DELETE FROM learning_activities WHERE topic_id = ${id}`);
    if (learningActivities && learningActivities.length > 0) {
      for (const activity of learningActivities) {
        await db.runAsync(
          'INSERT INTO learning_activities (topic_id, activity_description, activity_type, resources, created_at) VALUES (?, ?, ?, ?, ?)',
          [id, activity.activity_description, activity.activity_type, activity.resources, new Date().toISOString()]
        );
      }
    }

    // Delete and re-insert evaluation guide
    await db.execAsync(`DELETE FROM evaluation_guides WHERE topic_id = ${id}`);
    if (evaluationGuide) {
      await db.runAsync(
        'INSERT INTO evaluation_guides (topic_id, evaluation_criteria, created_at) VALUES (?, ?, ?)',
        [id, evaluationGuide, new Date().toISOString()]
      );
    }

    console.log(`Saved topic ${id} with full details`);
  } catch (error) {
    console.error('Error saving topic details:', error);
    throw error;
  }
};

// ==================== STUDENT OPERATIONS ====================

export const saveStudent = async (student) => {
  const db = getDatabase();
  try {
    const { id, email, full_name, grade } = student;
    await db.runAsync(
      `INSERT INTO students (id, email, full_name, grade, created_at) VALUES (?, ?, ?, ?, ?)
       ON CONFLICT(id) DO UPDATE SET email=?, full_name=?, grade=?`,
      [id, email, full_name, grade, new Date().toISOString(), email, full_name, grade]
    );
  } catch (error) {
    console.error('Error saving student:', error);
    throw error;
  }
};

export const getStudent = async (studentId) => {
  const db = getDatabase();
  try {
    const student = await db.getFirstAsync(
      'SELECT * FROM students WHERE id = ?',
      [studentId]
    );
    return student || null;
  } catch (error) {
    console.error('Error fetching student:', error);
    return null;
  }
};

// ==================== PROGRESS OPERATIONS ====================

export const getStudentProgress = async (studentId, topicId) => {
  const db = getDatabase();
  try {
    const progress = await db.getFirstAsync(
      'SELECT * FROM student_progress WHERE student_id = ? AND topic_id = ?',
      [studentId, topicId]
    );
    return progress || null;
  } catch (error) {
    console.error('Error fetching student progress:', error);
    return null;
  }
};

export const updateStudentProgress = async (studentId, topicId, updates) => {
  const db = getDatabase();
  try {
    const existing = await getStudentProgress(studentId, topicId);

    if (existing) {
      // Update existing
      await db.runAsync(
        `UPDATE student_progress
         SET status = ?, understanding_level = ?, attempts = ?, last_accessed = ?, completed_at = ?, updated_at = ?
         WHERE student_id = ? AND topic_id = ?`,
        [
          updates.status || existing.status,
          updates.understanding_level !== undefined ? updates.understanding_level : existing.understanding_level,
          updates.attempts !== undefined ? updates.attempts : existing.attempts,
          updates.last_accessed || existing.last_accessed,
          updates.completed_at || existing.completed_at,
          new Date().toISOString(),
          studentId,
          topicId
        ]
      );
    } else {
      // Insert new
      await db.runAsync(
        `INSERT INTO student_progress (student_id, topic_id, status, understanding_level, attempts, last_accessed, created_at, updated_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          studentId,
          topicId,
          updates.status || 'not_started',
          updates.understanding_level || 0,
          updates.attempts || 0,
          updates.last_accessed || new Date().toISOString(),
          new Date().toISOString(),
          new Date().toISOString()
        ]
      );
    }
    console.log(`Updated progress for student ${studentId} on topic ${topicId}`);
  } catch (error) {
    console.error('Error updating student progress:', error);
    throw error;
  }
};

export const getStudentProgressByTopic = async (studentId, topicId) => {
  const db = getDatabase();
  try {
    const progress = await db.getFirstAsync(
      'SELECT status, understanding_level, attempts, last_accessed, completed_at FROM student_progress WHERE student_id = ? AND topic_id = ?',
      [studentId, topicId]
    );

    if (!progress) {
      return {
        status: 'not_started',
        understanding_level: 0,
        attempts: 0,
        lastAccessed: null,
        completedAt: null
      };
    }

    return {
      status: progress.status,
      understanding_level: progress.understanding_level,
      attempts: progress.attempts,
      lastAccessed: progress.last_accessed,
      completedAt: progress.completed_at
    };
  } catch (error) {
    console.error('Error fetching topic progress:', error);
    return null;
  }
};

// ==================== CONVERSATION OPERATIONS ====================

export const getConversationHistory = async (studentId, topicId, limit = 50) => {
  const db = getDatabase();
  try {
    const history = await db.getAllAsync(
      `SELECT user_message, ai_response, agent_type, created_at FROM conversation_logs
       WHERE student_id = ? AND topic_id = ?
       ORDER BY created_at DESC
       LIMIT ?`,
      [studentId, topicId, limit]
    );
    return (history || []).reverse();
  } catch (error) {
    console.error('Error fetching conversation history:', error);
    return [];
  }
};

export const saveConversationMessage = async (studentId, topicId, userMessage, aiResponse, agentType) => {
  const db = getDatabase();
  try {
    await db.runAsync(
      `INSERT INTO conversation_logs (student_id, topic_id, user_message, ai_response, agent_type, created_at)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [studentId, topicId, userMessage, aiResponse, agentType, new Date().toISOString()]
    );
    console.log(`Saved conversation message for student ${studentId} on topic ${topicId}`);
  } catch (error) {
    console.error('Error saving conversation message:', error);
    throw error;
  }
};

// ==================== OFFLINE QUEUE OPERATIONS ====================

export const queueAction = async (actionType, endpoint, method, body) => {
  const db = getDatabase();
  try {
    await db.runAsync(
      `INSERT INTO offline_queue (action_type, endpoint, method, body, timestamp, status)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [actionType, endpoint, method, JSON.stringify(body), new Date().toISOString(), 'pending']
    );
    console.log(`Queued action: ${actionType} ${endpoint}`);
  } catch (error) {
    console.error('Error queueing action:', error);
    throw error;
  }
};

export const getPendingActions = async (actionType = null) => {
  const db = getDatabase();
  try {
    let query = 'SELECT * FROM offline_queue WHERE status = ? ORDER BY action_type DESC, timestamp ASC';
    const params = ['pending'];

    if (actionType) {
      query = 'SELECT * FROM offline_queue WHERE status = ? AND action_type = ? ORDER BY timestamp ASC';
      params.push(actionType);
    }

    const actions = await db.getAllAsync(query, params);
    return actions || [];
  } catch (error) {
    console.error('Error fetching pending actions:', error);
    return [];
  }
};

export const updateActionStatus = async (actionId, status) => {
  const db = getDatabase();
  try {
    await db.runAsync(
      'UPDATE offline_queue SET status = ? WHERE id = ?',
      [status, actionId]
    );
  } catch (error) {
    console.error('Error updating action status:', error);
    throw error;
  }
};

export const clearSyncedActions = async () => {
  const db = getDatabase();
  try {
    await db.execAsync("DELETE FROM offline_queue WHERE status = 'synced'");
    console.log('Cleared synced actions from queue');
  } catch (error) {
    console.error('Error clearing synced actions:', error);
    throw error;
  }
};

// ==================== SYNC METADATA OPERATIONS ====================

export const getSyncMetadata = async (studentId) => {
  const db = getDatabase();
  try {
    const metadata = await db.getFirstAsync(
      'SELECT * FROM sync_metadata WHERE student_id = ?',
      [studentId]
    );
    return metadata || null;
  } catch (error) {
    console.error('Error fetching sync metadata:', error);
    return null;
  }
};

export const updateSyncMetadata = async (studentId, lastSync, serverVersion, syncStatus) => {
  const db = getDatabase();
  try {
    const existing = await getSyncMetadata(studentId);

    if (existing) {
      await db.runAsync(
        'UPDATE sync_metadata SET last_sync = ?, server_version = ?, sync_status = ? WHERE student_id = ?',
        [lastSync, serverVersion, syncStatus, studentId]
      );
    } else {
      await db.runAsync(
        'INSERT INTO sync_metadata (student_id, last_sync, server_version, sync_status) VALUES (?, ?, ?, ?)',
        [studentId, lastSync, serverVersion, syncStatus]
      );
    }
  } catch (error) {
    console.error('Error updating sync metadata:', error);
    throw error;
  }
};

// ==================== GAMIFICATION OPERATIONS ====================

export const getGamificationStats = async (studentId) => {
  const db = getDatabase();
  try {
    const stats = await db.getFirstAsync(
      'SELECT * FROM gamification_stats WHERE student_id = ?',
      [studentId]
    );
    return stats || null;
  } catch (error) {
    console.error('Error fetching gamification stats:', error);
    return null;
  }
};

export const initializeGamificationStats = async (studentId) => {
  const db = getDatabase();
  try {
    const existing = await getGamificationStats(studentId);
    if (!existing) {
      await db.runAsync(
        `INSERT INTO gamification_stats (student_id, total_points, level, current_streak, longest_streak, last_activity_date, created_at, updated_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [studentId, 0, 1, 0, 0, new Date().toISOString(), new Date().toISOString(), new Date().toISOString()]
      );
      console.log(`Initialized gamification stats for student ${studentId}`);
    }
  } catch (error) {
    console.error('Error initializing gamification stats:', error);
    throw error;
  }
};

export const addPoints = async (studentId, points, reason = '') => {
  const db = getDatabase();
  try {
    const stats = await getGamificationStats(studentId);
    const newTotal = (stats?.total_points || 0) + points;
    const newLevel = Math.floor(newTotal / 500) + 1;

    // Update gamification stats
    await db.runAsync(
      `UPDATE gamification_stats
       SET total_points = ?, level = ?, last_activity_date = ?, updated_at = ?
       WHERE student_id = ?`,
      [newTotal, newLevel, new Date().toISOString(), new Date().toISOString(), studentId]
    );

    // Log daily activity
    const today = new Date().toISOString().split('T')[0];
    const dailyActivity = await db.getFirstAsync(
      'SELECT * FROM daily_activity WHERE student_id = ? AND activity_date = ?',
      [studentId, today]
    );

    if (dailyActivity) {
      await db.runAsync(
        'UPDATE daily_activity SET points_earned = points_earned + ?, activities_count = activities_count + 1 WHERE student_id = ? AND activity_date = ?',
        [points, studentId, today]
      );
    } else {
      await db.runAsync(
        'INSERT INTO daily_activity (student_id, activity_date, points_earned, activities_count) VALUES (?, ?, ?, ?)',
        [studentId, today, points, 1]
      );
    }

    console.log(`Added ${points} points to student ${studentId}. New total: ${newTotal} (Level ${newLevel})`);

    return { totalPoints: newTotal, level: newLevel };
  } catch (error) {
    console.error('Error adding points:', error);
    throw error;
  }
};

export const updateStreak = async (studentId) => {
  const db = getDatabase();
  try {
    const stats = await getGamificationStats(studentId);
    const today = new Date().toISOString().split('T')[0];
    const lastActivity = stats?.last_activity_date ? new Date(stats.last_activity_date).toISOString().split('T')[0] : null;

    let newStreak = stats?.current_streak || 0;

    if (lastActivity === today) {
      // Already studied today, streak stays the same
      return newStreak;
    }

    // Check if yesterday
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split('T')[0];

    if (lastActivity === yesterdayStr) {
      // Consecutive day, increment streak
      newStreak = (stats?.current_streak || 0) + 1;
    } else {
      // Broke the chain or first time, reset to 1
      newStreak = 1;
    }

    // Track longest streak
    const longestStreak = Math.max(newStreak, stats?.longest_streak || 0);

    await db.runAsync(
      `UPDATE gamification_stats
       SET current_streak = ?, longest_streak = ?, last_activity_date = ?, updated_at = ?
       WHERE student_id = ?`,
      [newStreak, longestStreak, new Date().toISOString(), new Date().toISOString(), studentId]
    );

    console.log(`Updated streak for student ${studentId}: ${newStreak} days (longest: ${longestStreak})`);

    return newStreak;
  } catch (error) {
    console.error('Error updating streak:', error);
    throw error;
  }
};

export const awardBadge = async (studentId, badgeType, badgeName, badgeDescription, metadata = null) => {
  const db = getDatabase();
  try {
    const existing = await db.getFirstAsync(
      'SELECT * FROM badges WHERE student_id = ? AND badge_type = ?',
      [studentId, badgeType]
    );

    if (!existing) {
      await db.runAsync(
        `INSERT INTO badges (student_id, badge_type, badge_name, badge_description, metadata, earned_date)
         VALUES (?, ?, ?, ?, ?, ?)`,
        [studentId, badgeType, badgeName, badgeDescription, metadata ? JSON.stringify(metadata) : null, new Date().toISOString()]
      );
      console.log(`Awarded badge '${badgeType}' to student ${studentId}`);
      return true;
    }

    return false; // Badge already earned
  } catch (error) {
    console.error('Error awarding badge:', error);
    throw error;
  }
};

export const getBadges = async (studentId) => {
  const db = getDatabase();
  try {
    const badges = await db.getAllAsync(
      'SELECT * FROM badges WHERE student_id = ? ORDER BY earned_date DESC',
      [studentId]
    );
    return badges || [];
  } catch (error) {
    console.error('Error fetching badges:', error);
    return [];
  }
};

export const getDailyActivityLog = async (studentId, days = 7) => {
  const db = getDatabase();
  try {
    const activities = await db.getAllAsync(
      `SELECT * FROM daily_activity WHERE student_id = ? ORDER BY activity_date DESC LIMIT ?`,
      [studentId, days]
    );
    return activities || [];
  } catch (error) {
    console.error('Error fetching daily activity:', error);
    return [];
  }
};
