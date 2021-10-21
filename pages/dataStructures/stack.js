import React, { useState } from "react"
import StackControl from "../../components/dataStructures/stack/StackControl"
import StackGrid from "../../components/dataStructures/stack/StackGrid"
import Layout from "../../components/layout"
import { useStack } from "../../hooks/useStack"

const Stack = () => {
  const { clear, push, pop, flatten, isOverflow } = useStack()
  const flatStack = flatten()

  const [pushValue, setPushValue] = useState("")
  const [showOverflow, setShowOverflow] = useState(false)
  const overflow = isOverflow()

  const handlePushClick = (e) => {
    e.preventDefault()

    if (overflow) {
      setShowOverflow(true)
      // Reset push value
      setPushValue("")
    } else {
      push(pushValue)
      // Reset push value
      setPushValue("")
    }
  }

  const handlePopClick = (e) => {
    pop()
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
            Stack
          </h3>
          <div className="max-w-4xl text-sm text-gray-500">
            <p className="mt-8">
              A stack is an abstract data type that serves as a collection of
              elements.
            </p>

            <p className="mt-2">The stack has two main operations:</p>
            <ul className="ml-6 list-disc">
              <li>Push, which adds an element to the top of the collection.</li>
              <li>Pop, which removes the most recently added element.</li>
            </ul>

            <p className="mt-2">Examples:</p>
            <ul className="ml-6 list-disc">
              <li>Back button on a web browser.</li>
              <li>Stack of plates in a cafeteria.</li>
            </ul>
          </div>
        </section>

        <section className="pt-4">
          <div>
            <StackControl
              pushValue={pushValue}
              setPushValue={setPushValue}
              handlePushClick={handlePushClick}
              handlePopClick={handlePopClick}
              handleClearClick={handleClearClick}
            />
          </div>
        </section>
      </div>

      <div className="mt-24">
        <StackGrid flatStack={flatStack} />
      </div>

      {showOverflow ? (
        <div>
          <h1 className="text-center text-4xl text-yellow-600 animate-ping duration-700">
            Stack Overflow!!!
          </h1>
        </div>
      ) : (
        <div></div>
      )}
    </Layout>
  )
}

export default Stack
