import React, { useState } from "react"
import ActionButton from "../shared/ActionButton"
import ClearButton from "../shared/ClearButton"
import Input from "../shared/Input"

const LinkedListControl = ({
  inputValue,
  setInputValue,
  appendInputTitle,
  handleAppendClick,
  deleteInputTitle,
  handleDeleteClick,
  findInputTitle,
  handleFindClick,
  handleClearClick,
}) => {
  const [isValidInput, setIsValidInput] = useState(false)

  return (
    <div className="max-w-md mx-auto my-5">
      <div className="flex justify-center mb-5">
        <input
          id="linkedListInput"
          name="linkedListInput"
          autoComplete="off"
          placeholder="Please enter value"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm border-secondary-300 border py-2 px-4 rounded-md "
        />
      </div>

      <div className="flex justify-between">
        <ActionButton
          title={appendInputTitle}
          handleClick={handleAppendClick}
          inputValue={inputValue}
        />
        <ActionButton
          title={deleteInputTitle}
          handleClick={handleDeleteClick}
          inputValue={inputValue}
        />
        <ActionButton 
          title={findInputTitle} 
          handleClick={handleFindClick} 
          inputValue={inputValue}
        />
        <ClearButton handleClearClick={handleClearClick} />
      </div>
    </div>
  )
}

export default LinkedListControl
