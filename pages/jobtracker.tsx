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
import { useRouter } from 'next/router';

function JobTracker() {
  const router = useRouter();
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

  const handlePinCancel = () => {
    router.push('/');
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

  const handleDeleteApplication = async (applicationId: string) => {
    if (!confirm('Are you sure you want to delete this application?')) return;

    try {
      const response = await fetch(`/api/job-applications/${applicationId}`, {
        method: 'DELETE',
      });
      const result = await response.json();
      
      if (result.success) {
        refetch();
      } else {
        console.error('Failed to delete application:', result.error);
        alert('Failed to delete application. Please try again.');
      }
    } catch (error) {
      console.error('Error deleting application:', error);
      alert('An error occurred while deleting the application.');
    }
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
          onCancel={handlePinCancel}
        />
      )}
      <div className={`min-h-screen py-8 px-4 sm:px-6 lg:px-8 transition-all ${!isAuthenticated ? 'blur-md pointer-events-none' : ''}`}>
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className='flex w-[100%] justify-between'>
            <div className="mb-8 ">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Job Application Tracker
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Track and manage your job applications
              </p>
            </div>
            <JobStats applications={applications} />
          </div>

          {/* <JobStats applications={applications} /> */}
          <div className='flex justify-between items-center'>
            <JobFilters applications={applications} filter={filter} setFilter={setFilter} />
            <JobFormButton setShowForm={setShowForm} />
          </div>
          <JobTrackerTable 
            applications={applications} 
            filter={filter} 
            editApplication={handleEditApplication}
            deleteApplication={handleDeleteApplication}
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