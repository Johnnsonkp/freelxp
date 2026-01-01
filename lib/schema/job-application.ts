import { z } from 'zod';

/**
 * Job Application Status
 */
export const JobApplicationStatus = z.enum([
  'applied',
  'interviewing',
  'offer',
  'rejected',
  'accepted',
  'withdrawn',
]);

export type JobApplicationStatus = z.infer<typeof JobApplicationStatus>;

/**
 * Job Application Schema
 * Validates all fields for a job application entry
 */
export const JobApplicationSchema = z.object({
  id: z.string().uuid().optional(), // Optional for new entries
  company: z.string().min(1, 'Company name is required').max(100),
  job_title: z.string().min(1, 'Job title is required').max(150),
  status: JobApplicationStatus.default('applied'),
  applied_date: z.date().or(z.string().datetime()).optional(),
  location: z.string().max(100).optional(),
  job_url: z.string().url('Invalid URL format').optional().or(z.literal('')),
  contact_name: z.string().max(100).optional(),
  contact_email: z.string().email('Invalid email format').optional().or(z.literal('')),
  notes: z.string().max(1000).optional(),
  salary: z.string().max(50).optional(), // Store as string to allow ranges like "$80k-$100k"
  followed_up: z.boolean().default(false),
  created_at: z.date().or(z.string().datetime()).optional(),
  updated_at: z.date().or(z.string().datetime()).optional(),
});

export type JobApplication = z.infer<typeof JobApplicationSchema>;

/**
 * Schema for creating a new job application (without id)
 */
export const CreateJobApplicationSchema = JobApplicationSchema.omit({ 
  id: true,
  created_at: true,
  updated_at: true,
});

export type CreateJobApplication = z.infer<typeof CreateJobApplicationSchema>;

/**
 * Schema for updating an existing job application
 * All fields except id are optional
 */
export const UpdateJobApplicationSchema = JobApplicationSchema.partial().required({ id: true });

export type UpdateJobApplication = z.infer<typeof UpdateJobApplicationSchema>;

/**
 * Helper function to validate job application data
 */
export function validateJobApplication(data: unknown): JobApplication {
  return JobApplicationSchema.parse(data);
}

/**
 * Helper function to safely validate job application data
 * Returns validation errors instead of throwing
 */
export function safeValidateJobApplication(data: unknown) {
  return JobApplicationSchema.safeParse(data);
}
