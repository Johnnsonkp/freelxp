import React from 'react'
import type { JobApplicationStatus as StatusType } from '../../../lib/schema/job-application'

function JobFilters({applications, filter, setFilter}: {
  applications: { status: string }[];
  filter: StatusType | 'all';
  setFilter: (filter: StatusType | 'all') => void;
}) {
  return (
    <div className="py-4 rounded-lg mb-1">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            filter === 'all'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          All ({applications?.length || 0})
        </button>
        {(['applied', 'interviewing', 'offer', 'rejected', 'accepted', 'withdrawn'] as const).map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors capitalize ${
              filter === status
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            {status} ({applications?.filter(a => a.status === status).length || 0})
          </button>
        ))}
      </div>
    </div>
  )
}

export default JobFilters