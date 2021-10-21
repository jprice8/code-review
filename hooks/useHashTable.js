import React, { useState } from "react"

const hashKey = (key, size) => {
  let charCodesSum = 0

  for (let i = 0; i < key.length; i++) {
    charCodesSum = charCodesSum + key.charCodeAt(i)
  }

  return charCodesSum % size
}

const DEFAULT_SIZE = 37

export const useHashTable = (size = DEFAULT_SIZE) => {
  const [table, setTable] = useState(new Array(size))

  return {
    insert: (key, value) => {
      setTable((table) => {
        const xTable = [...table]

        xTable[hashKey(key, size)] = value

        return xTable
      })
    },
    remove: (key) => {
      setTable((table) => {
        const xTable = [...table]

        xTable[hashKey(key, size)] = null

        return xTable
      })
    },
    search: (key) => {
      return table[hashKey(key, size)]
    },
  }
}
