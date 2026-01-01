import type { NextApiRequest, NextApiResponse } from 'next';
import {
  deleteJobApplication,
  getJobApplicationById,
  updateJobApplication,
} from '../../../lib/db/job-application-db';

import { UpdateJobApplicationSchema } from '../../../lib/schema/job-application';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  if (typeof id !== 'string') {
    return res.status(400).json({
      success: false,
      error: 'Invalid ID',
    });
  }

  if (req.method === 'GET') {
    try {
      const application = await getJobApplicationById(id);

      if (!application) {
        return res.status(404).json({
          success: false,
          error: 'Job application not found',
        });
      }

      return res.status(200).json({
        success: true,
        data: application,
      });
    } catch (error: any) {
      console.error('Error fetching job application:', error);

      return res.status(500).json({
        success: false,
        error: 'Failed to fetch job application',
        message: error.message,
      });
    }
  } else if (req.method === 'PUT' || req.method === 'PATCH') {
    try {
      // Validate request body
      const validatedData = UpdateJobApplicationSchema.parse({
        id,
        ...req.body,
      });

      // Convert date strings to Date objects if needed
      const dataToUpdate = {
        ...validatedData,
        applied_date: validatedData.applied_date
          ? new Date(validatedData.applied_date)
          : undefined,
      };

      // Update in database
      const updatedApplication = await updateJobApplication(id, dataToUpdate);

      if (!updatedApplication) {
        return res.status(404).json({
          success: false,
          error: 'Job application not found',
        });
      }

      return res.status(200).json({
        success: true,
        data: updatedApplication,
      });
    } catch (error: any) {
      console.error('Error updating job application:', error);

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
        error: 'Failed to update job application',
        message: error.message,
      });
    }
  } else if (req.method === 'DELETE') {
    try {
      await deleteJobApplication(id);

      return res.status(200).json({
        success: true,
        message: 'Job application deleted successfully',
      });
    } catch (error: any) {
      console.error('Error deleting job application:', error);

      return res.status(500).json({
        success: false,
        error: 'Failed to delete job application',
        message: error.message,
      });
    }
  } else {
    res.setHeader('Allow', ['GET', 'PUT', 'PATCH', 'DELETE']);
    return res.status(405).json({
      success: false,
      error: `Method ${req.method} Not Allowed`,
    });
  }
}
