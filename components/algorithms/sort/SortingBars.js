import React, { useEffect, useState } from "react"

const SortingBars = (props) => {

  return (
    <div className="mt-20 flex justify-between h-full">
      {props.blocks.map((block, idx) => {
        const height = (block * 500) / props.blocks.length
        console.log(Math.ceil(height))
        let bg = 'blue'

        // Idx is being compared with the other element
        if (props.compare && (idx === props.compare[0] || idx === props.compare[1])) {
          bg = 'yellow'
        }

        if (props.swap && (idx === props.swap[0] || idx === props.swap[1])) {
          bg = 'red'
        }

        // Element is in the sorted position
        if (props.sorted && props.sorted.includes(idx)) {
          bg = 'green'
        }

        const style = {
          height: height
        }

        return (
          <div key={idx} className={`bg-${bg}-500 w-4 rounded-md`} style={style}>
            <p className="text-sm text-white text-center">
              {block}
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default SortingBars
