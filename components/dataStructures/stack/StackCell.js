import React from "react"

const StackCell = ({ value }) => {
  return (
    <div className="my-6 bg-blue-700 hover:bg-blue-800 py-4 px-2">
      <h5 aria-labelledby={`stackCell${value}`} className="text-center text-white text-lg font-bold">{value}</h5>
    </div>
  )
}

export default StackCell
