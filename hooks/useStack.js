import React, { useState } from "react"

export const useStack = () => {
  const [stackObject, setStackObject] = useState({ top: null, size: 0 })

  return {
    push: (data) => {
      setStackObject((stackData) => {
        const xStackObject = { ...stackData }
        // Create new node
        let node = {
          data: data,
          next: null,
        }
        // If stack is empty
        if (!xStackObject.top) {
          xStackObject.top = node
        } else {
          // Set node next point to top
          node.next = xStackObject.top

          // Set node as top
          xStackObject.top = node
        }
        // Increase size after pushing
        xStackObject.size++
        return xStackObject
      })
    },
    pop: () => {
      setStackObject((stackData) => {
        const xStackObject = { ...stackData }
        // If stack is empty
        if (!xStackObject.top) {
          return xStackObject
        }
        // Pop the top element off
        xStackObject.top = xStackObject.top.next
        xStackObject.size--
        // Return stack
        return xStackObject
      })
    },
    peek: () => {
      if (!stackObject.top) {
        return {}
      } else {
        return stackObject.top
      }
    },
    isOverflow: () => {
      return stackObject.size > 3
    },
    clear: () => {
      setStackObject({ top: null, size: 0 })
    },
    flatten: () => {
      let flatlist = []
      let index = 0

      if (index >= stackObject.size) {
        return flatlist
      } else {
        let current = stackObject.top
        while (index < stackObject.size) {
          index++
          flatlist.push(current.data)
          current = current.next
        }

        return flatlist
      }
    },
    get: () => {
      return stackObject
    },
  }
}
