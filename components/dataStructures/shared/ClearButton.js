import React from "react"

const ClearButton = ({ handleClearClick }) => {
  return (
    <div>
      <button
        type="button"
        onClick={handleClearClick}
        className="px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
      >
        Clear
      </button>
    </div>
  )
}

export default ClearButton
