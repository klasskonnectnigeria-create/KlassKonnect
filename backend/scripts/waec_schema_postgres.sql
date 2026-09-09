-- WAEC/UTME Exam Preparation Schema for PostgreSQL
--
-- SCHEMA ONLY. No real WAEC/UTME question content exists anywhere in this
-- repo or the live DB (verified 2026-09-09: every table this file creates
-- has 0 rows in production). Sample/framework files claiming to contain real
-- past questions were deleted from this repo as fabricated placeholder
-- content that never went through real sourcing.
--
-- Do NOT populate these tables by hand or by asking an LLM to "fill in" WAEC
-- questions from memory. Any real past-question content must go through the
-- same sourcing discipline as curriculum content: the
-- .claude/agents/nerdc-curriculum-sourcer.md subagent pattern (web search →
-- fetch → validate real content → import → verify), not fabricated from
-- model knowledge.
BEGIN TRANSACTION;

-- Exam Specifications
CREATE TABLE IF NOT EXISTS exam_specifications (
    spec_id SERIAL PRIMARY KEY,
    subject VARCHAR(100) NOT NULL,
    num_questions INT,
    total_marks INT,
    time_minutes INT,
    question_types TEXT,
    pass_mark INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Past Questions
CREATE TABLE IF NOT EXISTS past_questions (
    question_id SERIAL PRIMARY KEY,
    subject VARCHAR(100) NOT NULL,
    topic VARCHAR(255),
    year INT,
    question_text TEXT NOT NULL,
    difficulty VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Question Options
CREATE TABLE IF NOT EXISTS question_options (
    option_id SERIAL PRIMARY KEY,
    question_id INT REFERENCES past_questions(question_id) ON DELETE CASCADE,
    option_letter CHAR(1),
    option_text TEXT,
    is_correct BOOLEAN DEFAULT FALSE
);

-- Study Materials
CREATE TABLE IF NOT EXISTS study_materials (
    material_id SERIAL PRIMARY KEY,
    subject VARCHAR(100),
    topic VARCHAR(255),
    material_type VARCHAR(50),
    content TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Definitions & Glossary
CREATE TABLE IF NOT EXISTS definitions_glossary (
    definition_id SERIAL PRIMARY KEY,
    subject VARCHAR(100),
    term VARCHAR(255),
    definition TEXT,
    example TEXT
);

-- High Frequency Topics
CREATE TABLE IF NOT EXISTS high_frequency_topics (
    freq_id SERIAL PRIMARY KEY,
    subject VARCHAR(100),
    topic_name VARCHAR(255),
    frequency_score INT,
    last_appeared INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Mock Tests
CREATE TABLE IF NOT EXISTS mock_tests (
    test_id SERIAL PRIMARY KEY,
    subject VARCHAR(100),
    test_name VARCHAR(255),
    num_questions INT,
    duration_minutes INT,
    total_marks INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Mock Test Questions
CREATE TABLE IF NOT EXISTS mock_test_questions (
    mock_q_id SERIAL PRIMARY KEY,
    test_id INT REFERENCES mock_tests(test_id),
    question_id INT REFERENCES past_questions(question_id),
    question_order INT
);

-- Student Progress Tracking
CREATE TABLE IF NOT EXISTS student_study_progress (
    progress_id SERIAL PRIMARY KEY,
    student_id INT,
    subject VARCHAR(100),
    questions_attempted INT DEFAULT 0,
    questions_correct INT DEFAULT 0,
    last_studied TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    accuracy_percentage DECIMAL(5,2)
);

-- Exam Strategies
CREATE TABLE IF NOT EXISTS exam_strategies (
    strategy_id SERIAL PRIMARY KEY,
    subject VARCHAR(100),
    strategy_name VARCHAR(255),
    description TEXT,
    tips TEXT[]
);

-- Create Indexes
CREATE INDEX idx_past_questions_subject ON past_questions(subject);
CREATE INDEX idx_past_questions_year ON past_questions(year);
CREATE INDEX idx_study_materials_subject ON study_materials(subject);
CREATE INDEX idx_high_frequency_topics ON high_frequency_topics(subject, frequency_score DESC);
CREATE INDEX idx_student_progress ON student_study_progress(student_id, subject);

-- Views for Reports
CREATE OR REPLACE VIEW exam_prep_summary AS
SELECT 
    s.subject,
    COUNT(DISTINCT pq.question_id) as total_questions,
    COUNT(DISTINCT hf.topic_name) as topics_covered,
    COUNT(DISTINCT mt.test_id) as mock_tests_available
FROM exam_specifications s
LEFT JOIN past_questions pq ON s.subject = pq.subject
LEFT JOIN high_frequency_topics hf ON s.subject = hf.subject
LEFT JOIN mock_tests mt ON s.subject = mt.subject
GROUP BY s.subject;

COMMIT;

-- Summary
SELECT 'WAEC/UTME PostgreSQL Schema - Successfully Created' as status;
