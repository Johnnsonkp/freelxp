import type { JobApplication } from '../../../types/job-application'
import React from 'react'

function JobStats({ applications }: { applications: JobApplication[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-6">
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
        <div className="text-2xl font-bold text-gray-900 dark:text-white">
          {applications?.length || 0}
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400">Total Applications</div>
      </div>
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
        <div className="text-2xl font-bold text-yellow-600">
          {applications?.filter(a => a.status === 'interviewing').length || 0}
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400">Interviewing</div>
      </div>
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
        <div className="text-2xl font-bold text-green-600">
          {applications?.filter(a => a.status === 'offer').length || 0}
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400">Offers</div>
      </div>
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
        <div className="text-2xl font-bold text-red-600">
          {applications?.filter(a => a.status === 'rejected').length || 0}
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400">Rejected</div>
      </div>
    </div>
  )
}

export default JobStats