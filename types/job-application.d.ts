import type { JobApplication as JobApplicationType } from '../lib/schema/job-application';

/**
 * Job Application Type Definitions
 * Re-export types from Zod schema for use throughout the application
 */
export type JobApplication = JobApplicationType;

export type JobApplicationStatus = 
  | 'applied'
  | 'interviewing'
  | 'offer'
  | 'rejected'
  | 'accepted'
  | 'withdrawn';

/**
 * API Response Types
 */
export interface JobApplicationsResponse {
  data: JobApplication[];
  total: number;
  page?: number;
  limit?: number;
}

export interface JobApplicationResponse {
  data: JobApplication;
  message?: string;
}

export interface JobApplicationError {
  error: string;
  details?: Record<string, string[]>;
}
