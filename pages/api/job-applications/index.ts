import type { NextApiRequest, NextApiResponse } from 'next';
import { createJobApplication, getAllJobApplications } from '../../../lib/db/job-application-db';

import { CreateJobApplicationSchema } from '../../../lib/schema/job-application';
import type { JobApplication } from '../../../types/job-application';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      // Validate request body
      const validatedData = CreateJobApplicationSchema.parse(req.body);

      // Convert date strings to Date objects if needed
      const dataToInsert = {
        ...validatedData,
        applied_date: validatedData.applied_date 
          ? new Date(validatedData.applied_date) 
          : undefined,
      };

      // Insert into database
      const newApplication = await createJobApplication(dataToInsert);

      return res.status(201).json({
        success: true,
        data: newApplication,
      });
    } catch (error: any) {
      console.error('Error creating job application:', error);
      
      if (error.errors) {
        // Zod validation errors
        return res.status(400).json({
          success: false,
          error: 'Validation failed',
          details: error.errors,
        });
      }

      return res.status(500).json({
        success: false,
        error: 'Failed to create job application',
        message: error.message,
      });
    }
  } else if (req.method === 'GET') {
    try {
      const applications = await getAllJobApplications();
      
      return res.status(200).json({
        success: true,
        data: applications,
      });
    } catch (error: any) {
      console.error('Error fetching job applications:', error);
      
      return res.status(500).json({
        success: false,
        error: 'Failed to fetch job applications',
        message: error.message,
      });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).json({
      success: false,
      error: `Method ${req.method} Not Allowed`,
    });
  }
}
