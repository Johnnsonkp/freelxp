import { useEffect, useState } from 'react';
import type { JobApplication } from '../../types/job-application';

interface UseJobApplicationsReturn {
  applications: JobApplication[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
  setApplications: React.Dispatch<React.SetStateAction<JobApplication[]>>;
}

export function useJobApplications(): UseJobApplicationsReturn {
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getAllApplications = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('/api/job-applications');
      const result = await response.json();
      if (result.success) {
        setApplications(result.data);
      } else {
        const errorMessage = result.error || 'Failed to fetch applications';
        console.error('Failed to fetch applications:', errorMessage);
        setError(errorMessage);
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error fetching applications';
      console.error('Error fetching applications:', error);
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllApplications();
  }, []);

  return {
    applications,
    loading,
    error,
    refetch: getAllApplications,
    setApplications,
  };
}
