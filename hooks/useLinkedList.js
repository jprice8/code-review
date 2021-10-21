import React, { useState } from "react"

export const useLinkedList = () => {
  const [listObject, setListObject] = useState({ head: null, size: 0 })

  return {
    append: (data) => {
      setListObject((listObj) => {
        let current
        // Get list object
        const xListObj = { ...listObj }
        // Construct new node
        let node = {
          data: data,
          next: null,
        }

        // If head is null, set head to node
        if (xListObj.head === null) {
          xListObj.head = node
          xListObj.size++
          return xListObj
          // If not null, set the next node with data
        } else {
          current = xListObj.head
          // Get tail node of linked list
          while (current.next) {
            current = current.next
          }
          // Set tail node to the newly created node with given data
          current.next = node
          xListObj.size++
          // Return the list object with newly appended node
          return xListObj
        }
      })
    },

    // Find occurence of a given value
    find: (data) => {
      // Check if head is null
      if (!listObject.head) {
        return false
      }

      // Set pointer to head node
      let current = listObject.head

      // Traverse through nodes
      while (current) {
        if (current.data === data) {
          return data
        }
        current = current.next
      }
      // If no match, return false
      return false
    },

    // Delete all occurences of a given value
    remove: (data) => {
      setListObject((listObj) => {
        // Construct replica of list object
        const xListObj = { ...listObj }

        // Set current pointer to head, and previous pointer to null
        let prev
        let current = xListObj.head

        // Check if head data matches key
        if (current && current.data === data) {
          xListObj.head = xListObj.head.next
          xListObj.size--
          return xListObj
        }

        // Traverse linked list until match
        while (current && current.data !== data) {
          prev = current
          current = current.next
        }

        // Check for null head
        if (!current) {
          return xListObj
        }

        // Delete matching node
        prev.next = current.next
        xListObj.size--
        return xListObj
      })
    },

    flatten: () => {
      let flatList = []
      let index = 0

      if (index >= listObject.size) {
        return flatList
      } else {
        let current = listObject.head
        while (index < listObject.size) {
          index++
          flatList.push(current.data)
          current = current.next
        }

        return flatList
      }
    },

    clear: () => {
      setListObject({ head: null, size: 0 })
    },
  }
}
