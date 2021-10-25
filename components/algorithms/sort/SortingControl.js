import React from "react"
import Layout from "../../Layout"

const SortingControl = (props) => {
  return (
    <div className="bg-white p-10 rounded-lg">
      <section>
        <h1 className="text-3xl leading-6 font-medium text-gray-900">
          {props.algo}
        </h1>

        <div className="flex mt-10 space-x-8 border-b pb-10">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Speed
            </label>
            <input
              type="range"
              onChange={props.handleSpeedClick}
              min="1"
              max="10"
              value={Math.ceil(400 / props.speed)}
              disabled={props.sorting}
              className="mt-2 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Length
            </label>
            <input
              type="range"
              onChange={props.handleLengthClick}
              min="5"
              max={28}
              step="1"
              disabled={props.sorting}
              value={props.length}
              className="mt-2 py-2"
            />
          </div>

          <div>
            <label
              htmlFor="algorithm"
              className="block text-sm font-medium text-gray-700"
            >
              Algorithm
            </label>
            <select
              id="algorithm"
              name="algorithm"
              className="mt-2 block w-full border py-2 pl-3 pr-10 border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              onChange={props.handleAlgoClick}
              disabled={props.sorting}
              value={props.algo}
            >
              <option value="bubbleSort">Bubble Sort</option>
              <option value="selectionSort">Selection Sort</option>
              <option value="insertionSort">Insertion Sort</option>
              <option value="mergeSort">Merge Sort</option>
              <option value="quickSort">Quick Sort</option>
            </select>
          </div>
        </div>

        <div className="text-center space-x-4 mt-10">
          <button
            onClick={props.handleSortClick}
            disabled={props.sorting || props.completed}
            className="px-5 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Sort
          </button>
          <button
            onClick={props.generateRandomArray}
            disabled={props.sorting}
            className="px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Reset
          </button>
        </div>
      </section>
    </div>
  )
}

export default SortingControl
