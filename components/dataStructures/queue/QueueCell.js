import React from 'react'

const QueueCell = ({ value }) => {
  return (
    <div className="mx-6 bg-indigo-700 hover:bg-blue-800 py-6 px-12 flex-row-reverse">
      <h1 className="text-center text-white text-lg font-bold">{value}</h1>
    </div>
  )
}

export default QueueCell
