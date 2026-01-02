-- Job Tracker Database Schema
-- PostgreSQL database for tracking job applications

-- Create database (run this separately if needed)
-- CREATE DATABASE job_tracker;

-- Connect to the database
-- \c job_tracker

-- Create ENUM type for job application status
CREATE TYPE job_status AS ENUM (
  'applied',
  'interviewing',
  'offer',
  'rejected',
  'accepted',
  'withdrawn'
);

-- Create job_applications table
CREATE TABLE IF NOT EXISTS job_applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company VARCHAR(100) NOT NULL,
  job_title VARCHAR(150) NOT NULL,
  status job_status NOT NULL DEFAULT 'applied',
  applied_date TIMESTAMP WITH TIME ZONE,
  location VARCHAR(100),
  job_url TEXT,
  contact_name VARCHAR(100),
  contact_email VARCHAR(255),
  notes TEXT CHECK (LENGTH(notes) <= 1000),
  salary VARCHAR(50),
  followed_up BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_job_applications_status ON job_applications(status);
CREATE INDEX IF NOT EXISTS idx_job_applications_company ON job_applications(company);
CREATE INDEX IF NOT EXISTS idx_job_applications_applied_date ON job_applications(applied_date);
CREATE INDEX IF NOT EXISTS idx_job_applications_created_at ON job_applications(created_at);

-- Create a function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = CURRENT_TIMESTAMP;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create a trigger to call the function before updates
CREATE TRIGGER update_job_applications_updated_at
  BEFORE UPDATE ON job_applications
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Insert sample data (optional)
INSERT INTO job_applications (
  company,
  job_title,
  status,
  applied_date,
  location,
  job_url,
  contact_name,
  contact_email,
  salary,
  followed_up,
  notes
) VALUES
  (
    'Google',
    'Senior Frontend Engineer',
    'interviewing',
    '2025-12-01 10:00:00+00',
    'Mountain View, CA',
    'https://careers.google.com/jobs/123',
    'Jane Smith',
    'jane@google.com',
    '$150k-$200k',
    TRUE,
    'Phone screen scheduled for next week'
  ),
  (
    'Meta',
    'Full Stack Developer',
    'applied',
    '2025-12-15 14:30:00+00',
    'Remote',
    'https://careers.meta.com/jobs/456',
    NULL,
    NULL,
    '$140k-$180k',
    FALSE,
    NULL
  );

-- Query examples:

-- Get all applications
-- SELECT * FROM job_applications ORDER BY applied_date DESC;

-- Get applications by status
-- SELECT * FROM job_applications WHERE status = 'interviewing';

-- Get applications that need follow-up
-- SELECT * FROM job_applications WHERE followed_up = FALSE AND status NOT IN ('rejected', 'withdrawn');

-- Count applications by status
-- SELECT status, COUNT(*) as count FROM job_applications GROUP BY status;

-- Update an application status
-- UPDATE job_applications SET status = 'offer' WHERE id = 'your-uuid-here';

-- Delete an application
-- DELETE FROM job_applications WHERE id = 'your-uuid-here';

-- Grant permissions to the application user
-- Replace 'user' with your actual database user if different
GRANT ALL PRIVILEGES ON TABLE job_applications TO "postgres";
GRANT USAGE ON TYPE job_status TO "postgres";
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO "postgres";
