import type { JobApplication } from '../schema/job-application';
import { query } from './postgres';

/**
 * Database operations for job applications
 */

// Get all job applications
export async function getAllJobApplications(): Promise<JobApplication[]> {
  const sql = `
    SELECT 
      id::text,
      company,
      job_title,
      status,
      applied_date,
      location,
      job_url,
      contact_name,
      contact_email,
      notes,
      salary,
      followed_up,
      created_at,
      updated_at
    FROM job_applications
    ORDER BY applied_date DESC NULLS LAST, created_at DESC
  `;
  
  return await query<JobApplication>(sql);
}

// Get job application by ID
export async function getJobApplicationById(id: string): Promise<JobApplication | null> {
  const sql = `
    SELECT 
      id::text,
      company,
      job_title,
      status,
      applied_date,
      location,
      job_url,
      contact_name,
      contact_email,
      notes,
      salary,
      followed_up,
      created_at,
      updated_at
    FROM job_applications
    WHERE id = $1
  `;
  
  const results = await query<JobApplication>(sql, [id]);
  return results[0] || null;
}

// Get job applications by status
export async function getJobApplicationsByStatus(status: string): Promise<JobApplication[]> {
  const sql = `
    SELECT 
      id::text,
      company,
      job_title,
      status,
      applied_date,
      location,
      job_url,
      contact_name,
      contact_email,
      notes,
      salary,
      followed_up,
      created_at,
      updated_at
    FROM job_applications
    WHERE status = $1
    ORDER BY applied_date DESC NULLS LAST, created_at DESC
  `;
  
  return await query<JobApplication>(sql, [status]);
}

// Create a new job application
export async function createJobApplication(data: Omit<JobApplication, 'id' | 'created_at' | 'updated_at'>): Promise<JobApplication> {
  const sql = `
    INSERT INTO job_applications (
      company,
      job_title,
      status,
      applied_date,
      location,
      job_url,
      contact_name,
      contact_email,
      notes,
      salary,
      followed_up
    )
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
    RETURNING 
      id::text,
      company,
      job_title,
      status,
      applied_date,
      location,
      job_url,
      contact_name,
      contact_email,
      notes,
      salary,
      followed_up,
      created_at,
      updated_at
  `;
  
  const params = [
    data.company,
    data.job_title,
    data.status,
    data.applied_date || null,
    data.location || null,
    data.job_url || null,
    data.contact_name || null,
    data.contact_email || null,
    data.notes || null,
    data.salary || null,
    data.followed_up ?? false,
  ];
  
  const results = await query<JobApplication>(sql, params);
  return results[0];
}

// Update a job application
export async function updateJobApplication(id: string, data: Partial<JobApplication>): Promise<JobApplication | null> {
  const fields: string[] = [];
  const values: any[] = [];
  let paramCount = 1;
  
  // Build dynamic UPDATE query
  if (data.company !== undefined) {
    fields.push(`company = $${paramCount++}`);
    values.push(data.company);
  }
  if (data.job_title !== undefined) {
    fields.push(`job_title = $${paramCount++}`);
    values.push(data.job_title);
  }
  if (data.status !== undefined) {
    fields.push(`status = $${paramCount++}`);
    values.push(data.status);
  }
  if (data.applied_date !== undefined) {
    fields.push(`applied_date = $${paramCount++}`);
    values.push(data.applied_date);
  }
  if (data.location !== undefined) {
    fields.push(`location = $${paramCount++}`);
    values.push(data.location);
  }
  if (data.job_url !== undefined) {
    fields.push(`job_url = $${paramCount++}`);
    values.push(data.job_url);
  }
  if (data.contact_name !== undefined) {
    fields.push(`contact_name = $${paramCount++}`);
    values.push(data.contact_name);
  }
  if (data.contact_email !== undefined) {
    fields.push(`contact_email = $${paramCount++}`);
    values.push(data.contact_email);
  }
  if (data.notes !== undefined) {
    fields.push(`notes = $${paramCount++}`);
    values.push(data.notes);
  }
  if (data.salary !== undefined) {
    fields.push(`salary = $${paramCount++}`);
    values.push(data.salary);
  }
  if (data.followed_up !== undefined) {
    fields.push(`followed_up = $${paramCount++}`);
    values.push(data.followed_up);
  }
  
  if (fields.length === 0) {
    return getJobApplicationById(id);
  }
  
  values.push(id);
  
  const sql = `
    UPDATE job_applications
    SET ${fields.join(', ')}
    WHERE id = $${paramCount}
    RETURNING 
      id::text,
      company,
      job_title,
      status,
      applied_date,
      location,
      job_url,
      contact_name,
      contact_email,
      notes,
      salary,
      followed_up,
      created_at,
      updated_at
  `;
  
  const results = await query<JobApplication>(sql, values);
  return results[0] || null;
}

// Delete a job application
export async function deleteJobApplication(id: string): Promise<boolean> {
  const sql = `DELETE FROM job_applications WHERE id = $1`;
  await query(sql, [id]);
  return true;
}

// Get applications statistics
export async function getJobApplicationStats() {
  const sql = `
    SELECT 
      COUNT(*) as total,
      COUNT(CASE WHEN status = 'applied' THEN 1 END) as applied,
      COUNT(CASE WHEN status = 'interviewing' THEN 1 END) as interviewing,
      COUNT(CASE WHEN status = 'offer' THEN 1 END) as offers,
      COUNT(CASE WHEN status = 'rejected' THEN 1 END) as rejected,
      COUNT(CASE WHEN status = 'accepted' THEN 1 END) as accepted,
      COUNT(CASE WHEN status = 'withdrawn' THEN 1 END) as withdrawn,
      COUNT(CASE WHEN followed_up = FALSE AND status NOT IN ('rejected', 'withdrawn', 'accepted') THEN 1 END) as needs_follow_up
    FROM job_applications
  `;
  
  const results = await query<any>(sql);
  return results[0];
}
