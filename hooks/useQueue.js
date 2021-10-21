import React, { useState } from "react"

export const useQueue = () => {
  const [queueObject, setQueueObject] = useState({
    rear: null,
    front: null,
    size: 0,
  })

  return {
    enqueue: (data) => {
      setQueueObject((queueData) => {
        const xQueueObject = { ...queueData }

        // Create new node
        let node = {
          data: data,
          next: null,
        }

        if (!xQueueObject.rear) {
          xQueueObject.rear = node
          xQueueObject.front = node
        } else {
          xQueueObject.rear.next = node
          xQueueObject.rear = node
        }
        xQueueObject.size++
        return xQueueObject
      })
    },
    dequeue: () => {
      setQueueObject((queueData) => {
        const xQueueObject = { ...queueData }

        if (!xQueueObject.front) {
          return xQueueObject
        }

        xQueueObject.front = xQueueObject.front.next
        xQueueObject.size--

        if (!xQueueObject.front) {
          xQueueObject.rear = xQueueObject.front
        }
        return xQueueObject
      })
    },
    flatten: () => {
      let flatlist = []
      let index = 0

      if (index >= queueObject.size) {
        return flatlist
      } else {
        let current = queueObject.front
        while (index < queueObject.size) {
          index++
          flatlist.push(current.data)
          current = current.next
        }
        return flatlist
      }
    },
    isOverflow: () => {
      return queueObject.size > 6 
    },
    clear: () => {
      setQueueObject({ rear: null, front: null, size: 0 })
    },
    get: () => {
      return queueObject
    },
  }
}
