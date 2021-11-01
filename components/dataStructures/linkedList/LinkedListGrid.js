import React from 'react'
import LinkCell from './LinkCell'

const LinkedListGrid = ({ data, found }) => {

  const isFound = (d, idx) => {
    if (found && d === found) {
      return (
        <LinkCell key={idx} value={d} prev="true" highlight="true" />
      )
    } else {
      return (
        <LinkCell key={idx} value={d} prev="true" />
      )
    }
  }

  return (
    <div className="flex flex-wrap bg-white p-10 rounded-lg shadow-md">
      <LinkCell value="Head" />
      {data.map((unit, idx) => (
        isFound(unit, idx)
      ))}
      <LinkCell value="Null" prev="true" />
    </div>
  )
}

export default LinkedListGrid
