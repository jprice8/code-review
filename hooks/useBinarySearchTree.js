import React, { useState } from "react"

const inOrderHelper = (flatArray, node) => {
  if (node === null) {
    return flatArray
  }

  inOrderHelper(flatArray, node.left)
  flatArray.push(node.value)
  inOrderHelper(flatArray, node.right)
  return flatArray
}

export const useBinaryTree = () => {
  const [binaryTreeObject, setBinaryTreeObject] = useState({
    root: null,
  })

  return {
    insert: (value) => {
      setBinaryTreeObject((btObj) => {
        const xBinaryTreeObject = { ...btObj }
        // Create new node
        let node = {
          value: value,
          left: null,
          right: null,
        }

        // Check for empty root
        if (xBinaryTreeObject.root === null) {
          xBinaryTreeObject.root = node
          return xBinaryTreeObject
        }

        // Set pointer to root
        let current = xBinaryTreeObject.root
        while (current) {
          // If new node has bigger data point
          if (node.value > current.value) {
            // Check to see if current has right child
            if (current.right === null) {
              current.right = node
              return xBinaryTreeObject
            } else {
              current = current.right
            }
          } else if (node.value < current.value) {
            if (current.left === null) {
              current.left = node
              return xBinaryTreeObject
            } else {
              current = current.left
            }
          } else {
            // If the data point already exists, return
            return xBinaryTreeObject
          }
        }
      })
    },

    flattenInOrder: () => {
      let current = binaryTreeObject.root
      let flatArray = []
      // Call helper function to mimic recursive call
      const returnArray = inOrderHelper(flatArray, current)
      return returnArray
    },

    get: () => {
      return binaryTreeObject
    },

    clear: () => {
      setBinaryTreeObject({ root: null })
    },
  }
}
