import type { JobApplication } from '../../../types/job-application'
import React from 'react'

function JobStats({ applications }: { applications: JobApplication[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-3">
      
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow flex align-middle items-center">
        <div className="text-3xl font-bold text-gray-900 dark:text-white mr-2">
          {applications?.length || 0}
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">Total Applications</div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow flex align-middle items-center">
        <div className="text-3xl font-bold text-gray-900 dark:text-white mr-2">
          {applications?.filter(a => a.status === 'interviewing').length || 0}
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">Interviewing</div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow flex align-middle items-center">
        <div className="text-3xl font-bold text-gray-900 dark:text-white mr-2">
          {applications?.filter(a => a.status === 'offer').length || 0}
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">Offers</div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow flex align-middle items-center">
        <div className="text-3xl font-bold text-gray-900 dark:text-white mr-2">
          {applications?.filter(a => a.status === 'rejected').length || 0}
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">Rejected</div>
      </div>
    </div>
  )
}

export default JobStats