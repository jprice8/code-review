import React from 'react'

const ActionButton = ({ title, handleClick,inputValue }) => {
  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
        disabled={inputValue ? false : true}
        className="px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
      >
        {title}
      </button>
    </div>
  )
}

export default ActionButton
