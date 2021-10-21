import React from 'react'

const ActionButton = ({ title, handleClick }) => {
  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
        className="px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        {title}
      </button>
    </div>
  )
}

export default ActionButton
