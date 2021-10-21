import React, { useState } from "react"

import Layout from '../../components/Layout'
import LinkedListGrid from "../../components/dataStructures/linkedList/LinkedListGrid"
import LinkedListControl from "../../components/dataStructures/linkedList/LinkedListControl"

import { useLinkedList } from "../../hooks/useLinkedList"

const LinkedList = () => {
  const { append, remove, flatten, find, clear } = useLinkedList()
  const flatLinky = flatten()

  const [appendValue, setAppendValue] = useState("")
  const [deleteValue, setDeleteValue] = useState("")
  const [findValue, setFindValue] = useState("")
  const [found, setFound] = useState(false)

  const handleAppendClick = (e) => {
    e.preventDefault()
    append(appendValue)
    // Reset append value and turn find off
    setAppendValue("")
    setFound(false)
  }

  const handleDeleteClick = (e) => {
    e.preventDefault()
    remove(deleteValue)
    // Reset delete value and turn find off
    setDeleteValue("")
    setFound(false)
  }

  const handleFindClick = (e) => {
    e.preventDefault()
    const tmpFound = find(findValue)
    console.log(`tmpFound is result of find hook: ${tmpFound}`)
    setFound(tmpFound)
    console.log(`found state var: ${found}`)
    setFindValue("")
  }

  const handleClearClick = (e) => {
    clear()
    setFound(false)
  }

  return (
    <Layout>
      <div className="bg-white p-10 rounded-lg">
        <section className="pb-8 border-b border-gray-200">
          <h3 className="text-3xl leading-6 font-medium text-gray-900">
            Linked List
          </h3>
          <div className="max-w-4xl text-sm text-gray-500">
            <p className="mt-8">
              A linked list is a linear collection of data elements where each
              element points to the next in the list. In this example, each node
              of the list contains a data point and a reference to the next
              element.
            </p>
          </div>
        </section>
        <section className="pt-4">
          <LinkedListControl
            appendValue={appendValue}
            appendInputTitle="Append O(1)"
            setAppendValue={setAppendValue}
            handleAppendClick={handleAppendClick}
            deleteValue={deleteValue}
            deleteInputTitle="Delete O(n)"
            setDeleteValue={setDeleteValue}
            handleDeleteClick={handleDeleteClick}
            findValue={findValue}
            findInputTitle="Find O(n)"
            setFindValue={setFindValue}
            handleFindClick={handleFindClick}
            handleClearClick={handleClearClick}
          />
        </section>
      </div>

      <div className="my-40">
        <LinkedListGrid data={flatLinky} found={found} />
      </div>
    </Layout>
  )
}

export default LinkedList
