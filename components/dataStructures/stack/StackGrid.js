import React from "react"

import StackCell from "./StackCell"

const StackGrid = ({ flatStack }) => {
  return (
    <div className="grid grid-cols-3 h-96">
      <div className="border-r-2 border-gray-800"></div>
      <div className="border-b-2 px-4 self-end border-gray-800">
        {flatStack.map((data, idx) => (
          <StackCell key={idx} value={data} />
        ))}
      </div>
      <div className="border-l-2 border-gray-800"></div>
    </div>
  )
}

export default StackGrid
