import React from "react"

const LinkCell = ({ value, prev, highlight }) => {
  return (
    <div id="cell" className="flex">
      {prev && (
        <div id="arrows">
          <div id="arrow-right" className="mt-2">
            ----&gt;
          </div>
        </div>
      )}
      {highlight ? (
        <div id="block" className="border-2 border-yellow-400 flex">
          <div className="pr-2 my-2 mx-4">{value}</div>
          <div className="pl-4 border-l-2 border-yellow-400" />
        </div>
      ) : (
        <div id="block" className="border-2 border-indigo-800 flex">
          <div className="pr-2 my-2 mx-4">{value}</div>
          <div className="pl-4 border-l-2 border-indigo-800" />
        </div>
      )}
    </div>
  )
}

export default LinkCell
