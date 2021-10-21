import React from "react"
import ClearButton from "../shared/ClearButton"
import BSTInput from "./BSTInput"

const BSTControl = ({ insertValue, setInsertValue, handleInsertClick, handleClearClick }) => {
  return (
    <div className="grid grid-cols-4 gap-4 my-5 items-center">
      <BSTInput
        name="Insert O(log n)"
        inputValue={insertValue}
        setInputValue={setInsertValue}
        handleClick={handleInsertClick}
      />

      <ClearButton handleClearClick={handleClearClick} />
    </div>
  )
}

export default BSTControl
