import React, { useState } from 'react';

import { CreateJobApplicationSchema } from '../../../lib/schema/job-application';
import type { JobApplication } from '../../../types/job-application';
import type { JobApplicationStatus } from '../../../lib/schema/job-application';

interface JobApplicationsFormProps {
  onAdd: (application: JobApplication) => void;
  onClose: () => void;
  updatedApplication?: JobApplication | null;
}

function JobApplicationsForm({ onAdd, onClose, updatedApplication }: JobApplicationsFormProps) {
  const [formData, setFormData] = useState({
    company: updatedApplication?.company || '',
    job_title: updatedApplication?.job_title || '',
    status: updatedApplication?.status || ('applied' as JobApplicationStatus),
    applied_date: updatedApplication?.applied_date 
      ? new Date(updatedApplication.applied_date).toISOString().split('T')[0]
      : '',
    location: updatedApplication?.location || '',
    job_url: updatedApplication?.job_url || '',
    contact_name: updatedApplication?.contact_name || '',
    contact_email: updatedApplication?.contact_email || '',
    notes: updatedApplication?.notes || '',
    salary: updatedApplication?.salary || '',
    followed_up: updatedApplication?.followed_up || false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      // Prepare data for validation
      const dataToValidate = {
        ...formData,
        applied_date: formData.applied_date ? new Date(formData.applied_date) : undefined,
        job_url: formData.job_url || '',
        contact_email: formData.contact_email || '',
      };

      // Validate with Zod schema
      const validatedData = CreateJobApplicationSchema.parse(dataToValidate);

      // Create new application object
      const newApplication: JobApplication = {
        id: crypto.randomUUID(), // Temporary, will be replaced by DB UUID
        ...validatedData,
        applied_date: validatedData.applied_date,
        created_at: new Date(),
        updated_at: new Date(),
      };

      // Call the API to save to database
      await onAdd(newApplication);
      onClose();
    } catch (error: any) {
      if (error.errors) {
        // Zod validation errors
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err: any) => {
          if (err.path) {
            newErrors[err.path[0]] = err.message;
          }
        });
        setErrors(newErrors);
      } else {
        // API or network errors
        setErrors({ submit: error.message || 'Failed to save application. Please try again.' });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const buttonText = updatedApplication ? 
    (isSubmitting ? 'Updating...' : 'Update Application') : 
    (isSubmitting ? 'Adding...' : 'Add Application');

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Add Job Application
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-2xl"
            >
              ×
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Company - Required */}
            <div className='flex justify-between gap-4'>
              <div className='flex-[0.5]'>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Company <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                    errors.company ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Google, Meta, etc."
                />
                {errors.company && (
                  <p className="text-red-500 text-sm mt-1">{errors.company}</p>
                )}
              </div>

              {/* Job Title - Required */}
              <div className='flex-[0.5]'>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Job Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="job_title"
                  value={formData.job_title}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                    errors.job_title ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Senior Frontend Engineer"
                />
                {errors.job_title && (
                  <p className="text-red-500 text-sm mt-1">{errors.job_title}</p>
                )}
              </div>
            </div>

            {/* Status & Applied Date - Row */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Status
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                >
                  <option value="applied">Applied</option>
                  <option value="interviewing">Interviewing</option>
                  <option value="offer">Offer</option>
                  <option value="rejected">Rejected</option>
                  <option value="accepted">Accepted</option>
                  <option value="withdrawn">Withdrawn</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Applied Date
                </label>
                <input
                  type="date"
                  name="applied_date"
                  value={formData.applied_date}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
            </div>

            {/* Location & Salary - Row */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Remote, San Francisco, CA"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Salary
                </label>
                <input
                  type="text"
                  name="salary"
                  value={formData.salary}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="$120k-$150k"
                />
              </div>
            </div>

            {/* Job URL */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Job URL
              </label>
              <input
                type="url"
                name="job_url"
                value={formData.job_url}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                  errors.job_url ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="https://careers.company.com/jobs/123"
              />
              {errors.job_url && (
                <p className="text-red-500 text-sm mt-1">{errors.job_url}</p>
              )}
            </div>

            {/* Contact Name & Email - Row */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Contact Name
                </label>
                <input
                  type="text"
                  name="contact_name"
                  value={formData.contact_name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Jane Smith"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Contact Email
                </label>
                <input
                  type="email"
                  name="contact_email"
                  value={formData.contact_email}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                    errors.contact_email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="recruiter@company.com"
                />
                {errors.contact_email && (
                  <p className="text-red-500 text-sm mt-1">{errors.contact_email}</p>
                )}
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Notes
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={3}
                maxLength={1000}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Add any additional notes..."
              />
              <p className="text-xs text-gray-500 mt-1">
                {formData.notes.length}/1000 characters
              </p>
            </div>

            {/* Followed Up */}
            <div className="flex items-center">
              <input
                type="checkbox"
                name="followed_up"
                checked={formData.followed_up}
                onChange={handleChange}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                I have followed up on this application
              </label>
            </div>

            {/* Error Message */}
            {errors.submit && (
              <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                <p className="text-red-600 dark:text-red-400 text-sm">{errors.submit}</p>
              </div>
            )}

            {/* Form Actions */}
            <div className="flex justify-end gap-3 pt-4 border-t dark:border-gray-700">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {/* {isSubmitting ? 'Adding...' : 'Add Application'} */}
                {buttonText}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default JobApplicationsForm;