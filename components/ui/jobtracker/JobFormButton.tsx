import React from 'react'

function JobFormButton({ setShowForm }: { setShowForm: (show: boolean) => void }) {
  return (
    <div className="mt-0 flex justify-end">
      <button 
        onClick={() => setShowForm(true)}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg"
      >
        + Add Application
      </button>
    </div>
  )
}

export default JobFormButton