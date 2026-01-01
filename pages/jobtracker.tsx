import React, { useEffect, useState } from 'react';

import type { JobApplication } from '../types/job-application';
import JobApplicationsForm from '../components/ui/jobtracker/JobApplicationsForm';
import JobFilters from '../components/ui/jobtracker/JobFilters';
import JobFormButton from '../components/ui/jobtracker/JobFormButton';
import JobStats from '../components/ui/jobtracker/JobStats';
import JobTrackerTable from '../components/ui/jobtracker/JobTrackerTable';
import PinProtection from '../components/ui/PinProtection';
import type { JobApplicationStatus as StatusType } from '../lib/schema/job-application';
import siteConfig from '../site.config';
import { useJobApplications } from '../lib/hooks/useJobApplications';

const statusColors: Record<StatusType, string> = {
  applied: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  interviewing: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  offer: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  rejected: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
  accepted: 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200',
  withdrawn: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200',
};

function JobTracker() {
  const { applications, loading, error, setApplications, refetch } = useJobApplications();
  const [filter, setFilter] = useState<StatusType | 'all'>('all');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if already authenticated in session
  useEffect(() => {
    const authenticated = sessionStorage.getItem('jobTrackerAuth');
    if (authenticated === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handlePinSuccess = () => {
    setIsAuthenticated(true);
    sessionStorage.setItem('jobTrackerAuth', 'true');
  };
  const [showForm, setShowForm] = useState(false);
  const [updatedApplication, setUpdatedApplication] = useState<JobApplication | null>(null);

  const handleAddApplicationToDb = async (newApplication: JobApplication) => {
    let method = 'POST';
    let url = '/api/job-applications';
    
    if (updatedApplication && updatedApplication?.id){
      method = 'PUT';
      url = `/api/job-applications/${updatedApplication.id}`;
    }
    
    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newApplication),
      });
      const result = await response.json();
      if (result.success) {
        setUpdatedApplication(null);
        refetch();
        return result.data;
      } else {
        console.error('Failed to save application:', result.error);
        throw new Error(result.error || 'Failed to save application');
      }
    } catch (error) {
      console.error('Error saving application:', error);
      throw error;
    }
  };

  const handleEditApplication = (updatedApplication: JobApplication) => {
    if (!updatedApplication.id) return;

    setUpdatedApplication(updatedApplication);
    setShowForm(true);
    setApplications(prev =>
      prev.map(app => (app.id === updatedApplication.id ? updatedApplication : app))
    );
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setUpdatedApplication(null);
  };

  return (
    <>
      {!isAuthenticated && (
        <PinProtection 
          correctPin={siteConfig.jobTrackerPin} 
          onSuccess={handlePinSuccess} 
        />
      )}
      <div className={`min-h-screen py-8 px-4 sm:px-6 lg:px-8 transition-all ${!isAuthenticated ? 'blur-md pointer-events-none' : ''}`}>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Job Application Tracker
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Track and manage your job applications
            </p>
          </div>

          <JobStats applications={applications} />
          <div className='flex justify-between items-center'>
            <JobFilters applications={applications} filter={filter} setFilter={setFilter} />
            <JobFormButton setShowForm={setShowForm} />
          </div>
          <JobTrackerTable 
            applications={applications} 
            filter={filter} 
            statusColors={statusColors} 
            editApplication={handleEditApplication}
          />

          {/* Form Modal */}
          {showForm && (
            <JobApplicationsForm 
              onAdd={handleAddApplicationToDb}
              onClose={handleCloseForm}
              updatedApplication={updatedApplication}
            />
          )}

        </div>
      </div>
    </>
  );
}

export default JobTracker;