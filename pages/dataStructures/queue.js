import React, { useState } from "react"
import Layout from "../../components/Layout"

import QueueControl from "../../components/dataStructures/queue/QueueControl"
import QueueGrid from "../../components/dataStructures/queue/QueueGrid"

import { useQueue } from "../../hooks/useQueue"

const Queue = () => {
  const { enqueue, dequeue, flatten, clear, isOverflow } = useQueue()
  const flatQueue = flatten()

  const [enqueueValue, setEnqueueValue] = useState("")
  const [showOverflow, setShowOverflow] = useState(false)
  const overflow = isOverflow()

  const handleEnqueueClick = (e) => {
    e.preventDefault()

    if (overflow) {
      setShowOverflow(true)
    } else {
      enqueue(enqueueValue)
    }
    // Reset value after submitting form.
    setEnqueueValue("")
  }

  const handleDequeueClick = (e) => {
    dequeue()
    setShowOverflow(false)
  }

  const handleClearClick = (e) => {
    clear()
    setShowOverflow(false)
  }

  return (
    <Layout>
      <div className="bg-white p-10 rounded-lg">
        <section className="pb-8 border-b border-gray-200">
          <h3 className="text-3xl leading-6 font-medium text-gray-900">
            Queue
          </h3>
          <div className="max-w-4xl text-sm text-gray-500">
            <p className="mt-6">
              A queue is a collection of entities that can be modified by the
              addition of an entity to the &quot;back&quot; of the sequence or
              the removal of an entity from the &quot;front&quot; of the
              sequence.
            </p>

            <p className="mt-4">The queue has two main operations:</p>
            <ul className="ml-6 list-disc">
              <li>Enqueue, which adds an element to the rear of the queue.</li>
              <li>
                Dequeue, which removes an element from the front of the queue.
              </li>
            </ul>

            <p className="mt-4">Examples:</p>
            <ul className="ml-6 list-disc">
              <li>Printing jobs in a queue for a printer.</li>
              <li>Waiting in line at the grocery store.</li>
            </ul>
          </div>
        </section>
        <section className="pt-4">
          <div>
            <QueueControl
              enqueueValue={enqueueValue}
              setEnqueueValue={setEnqueueValue}
              handleEnqueueClick={handleEnqueueClick}
              handleDequeueClick={handleDequeueClick}
              handleClearClick={handleClearClick}
            />
          </div>
        </section>
      </div>

      <div className="my-24">
        <QueueGrid flatQueue={flatQueue} />
      </div>

      {showOverflow ? (
        <div>
          <h1 className="text-center text-4xl text-yellow-600 animate-ping duration-700">
            Queue Overflow!!!
          </h1>
        </div>
      ) : (
        <div></div>
      )}
    </Layout>
  )
}

export default Queue
