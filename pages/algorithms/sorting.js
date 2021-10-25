import React, { useState, useEffect } from "react"

import SortingControl from "../../components/algorithms/sort/SortingControl"
import SortingBars from "../../components/algorithms/sort/SortingBars"

import bubbleSort from '../../algorithms/bubbleSort'
import insertionSort from '../../algorithms/insertionSort'
import mergeSort from '../../algorithms/mergeSort'
import quickSort from '../../algorithms/quickSort'
import selectionSort from '../../algorithms/selectionSort'
import Layout from "../../components/Layout"

const Sorting = () => {
  const [algo, setAlgo] = useState("quickSort")
  const [length, setLength] = useState(14)
  const [speed, setSpeed] = useState(250)
  const [completed, setCompleted] = useState(true)
  const [sorting, setSorting] = useState(false)
  const [blocks, setBlocks] = useState([])
  const [sortedIndex, setSortedIndex] = useState([])
  const [compare, setCompare] = useState([])
  const [swap, setSwap] = useState([])

  // Generate random array when the length is changed by the user
  useEffect(() => {
    generateRandomArray(length)
  }, [length, algo])

  // Handle user selecting algorithm
  const handleAlgoClick = (e) => {
    setAlgo(e.target.value)
  }

  // Handle user changing the length of array
  const handleLengthClick = (e) => {
    setLength(Number(event.target.value))
  }

  // Handle user changing the speed of sorting
  const handleSpeedClick = (e) => {
    setSpeed(Math.ceil(400 / Number(event.target.value)))
  }

  // Sorting according to alogirithm
  const handleSortClick = () => {
    const sortOrder = (order) => {
      ;(function loop(i) {
        setTimeout(() => {
          const [j, k, arr, index] = order[i]
          setCompare([j, k])
          setSwap([])

          if (index !== null) {
            setSortedIndex((prevState) => [...prevState, index])
          }

          if (arr) {
            setBlocks(arr)
            if (j !== null || k != null) setSwap([j, k])
          }

          if (++i < order.length) {
            loop(i)
          } else {
            setSorting(false)
            setCompleted(true)
          }
        }, speed)
      })(0)
    }

    setSorting(true)

    algo == 'bubbleSort'
      ? sortOrder(bubbleSort(blocks))
      : algo === 'selectionSort'
      ? sortOrder(selectionSort(blocks))
      : algo === 'insertionSort'
      ? sortOrder(insertionSort(blocks))
      : algo === 'mergeSort'
      ? sortOrder(mergeSort(blocks))
      : algo === 'quickSort'
      ? sortOrder(quickSort(blocks))
      : (() => {
        setSorting(false)
        setCompleted(true)
      })()
  }


  // Generating shuffled array of 1 to n
  const generateRandomArray = (l) => {
    setCompleted(false)
    setSorting(false)
    setSortedIndex([])

    const randomArray = Array.from(Array(l + 1).keys()).slice(1)

    for (let i = randomArray.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i - 1))
      const temp = randomArray[randomIndex]

      randomArray[i] = randomArray[randomIndex]
      randomArray[randomIndex] = temp
    }

    setBlocks(randomArray)
  }

  return (
    <Layout>
      <SortingControl 
        generateRandomArray={() => generateRandomArray(length)}
        handleAlgoClick={handleAlgoClick}
        handleLengthClick={handleLengthClick}
        handleSpeedClick={handleSpeedClick}
        handleSortClick={handleSortClick}
        sorting={sorting}
        completed={completed}
        length={length}
        speed={speed}
        algo={algo}
      />

      <SortingBars 
        blocks={blocks}
        compare={sorting && compare}
        swap={sorting && swap}
        sorted={sortedIndex}
      />
    </Layout>
  )
}

export default Sorting
