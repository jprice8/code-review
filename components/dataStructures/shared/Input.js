import React from "react"

const Input = ({ title, name, inputValue, setInputValue, handleClick }) => {
  return (
    <form onSubmit={handleClick}>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {title}
      </label>
      <div className="mt-1">
        <input
          required
          id={name}
          name={name}
          autoComplete="off"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm border-secondary-300 border py-2 px-4 rounded-md"
        />
      </div>
      <div className="mt-4">
        <button
          type="submit"
          className="px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          {name}
        </button>
      </div>
    </form>
  )
}

export default Input
