import React from "react"

import QueueCell from "./QueueCell"

const QueueGrid = ({ flatQueue }) => {
  return (
    <div className="flex flex-row-reverse border-t-2 border-b-2 py-2 h-24 border-gray-500">
      {flatQueue.map((data, idx) => (
        <QueueCell key={idx} value={data} />
      ))}
    </div>
  )
}

export default QueueGrid
