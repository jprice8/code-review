import React from "react"
import Layout from "../../components/Layout"

import { useHashTable } from '../../hooks/useHashTable'
import HashTableControl from '../../components/dataStructures/hashTable/HashTableControl'
import HashTableGrid from '../../components/dataStructures/hashTable/HashTableGrid'

const HashTable = () => {
  const { insert, remove, search } = useHashTable(37)

  return (
    <Layout>
      <div className="bg-white p-10 rounded-lg">
        <h3 className="text-3xl leading-6 font-medium text-gray-900">
          Hash Table
        </h3>
        <div className="mt-6 max-w-4xl text-sm text-gray-500">
          <p className="font-semibold">
            A hash table is a data structure that can map keys to values. A hash
            table uses a hash function to compute an index into an array of
            buckets. The index could then be hashed again on lookup to find
            where the specified value is.
          </p>

          <p className="mt-4">A hash table has three main operations:</p>
          <ul className="ml-6 list-disc">
            <li>Insert O(1)</li>
            <li>Delete O(1)</li>
            <li>Search O(1)</li>
          </ul>

          <p className="mt-4">Examples:</p>
          <ul className="ml-6 list-disc">
            <li>Database index to speed up retrieval.</li>
            <li>International Standard Book Number (ISBN) to find a book.</li>
          </ul>

          <p className="mt-4">
            When the hash function attempts to place a value at
            an index that already exist, it is called a "collision".
            There are two main ways to handle collisions, I am using
            separate chaining in my example. The chain is implemented as
            a linked list of records. 
          </p>
        </div>
      </div>

      <div>
        <HashTableControl />
      </div>

      <div>
        <HashTableGrid />
      </div>

    </Layout>
  )
}

export default HashTable
