import React, { useState } from "react"

import Layout from '../../components/Layout'
import LinkedListGrid from "../../components/dataStructures/linkedList/LinkedListGrid"
import LinkedListControl from "../../components/dataStructures/linkedList/LinkedListControl"

import { useLinkedList } from "../../hooks/useLinkedList"

const LinkedList = () => {
  const { append, remove, flatten, find, clear } = useLinkedList()
  const flatLinky = flatten()

  const [inputValue, setInputValue] = useState("")
  const [found, setFound] = useState(false)

  const handleAppendClick = (e) => {
    e.preventDefault()
    append(inputValue)
    // Reset append value and turn find off
    setInputValue("")
    setFound(false)
  }

  const handleDeleteClick = (e) => {
    e.preventDefault()
    remove(inputValue)
    // Reset delete value and turn find off
    setInputValue("")
    setFound(false)
  }

  const handleFindClick = (e) => {
    e.preventDefault()
    const tmpFound = find(inputValue)
    setFound(tmpFound)
    setInputValue("")
  }

  const handleClearClick = (e) => {
    clear()
    setFound(false)
  }

  return (
    <Layout>
      <div className="bg-white p-10 rounded-lg shadow-md">
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
            inputValue={inputValue}
            setInputValue={setInputValue}
            handleAppendClick={handleAppendClick}
            handleDeleteClick={handleDeleteClick}
            handleFindClick={handleFindClick}
            handleClearClick={handleClearClick}
            appendInputTitle="Append O(1)"
            deleteInputTitle="Delete O(n)"
            findInputTitle="Find O(n)"
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
