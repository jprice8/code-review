import React from "react"

import Input from '../shared/Input'
import ActionButton from '../shared/ActionButton'
import ClearButton from '../shared/ClearButton'

const StackControl = ({
  pushValue,
  setPushValue,
  handlePushClick,
  handlePopClick,
  handleClearClick,
}) => {
  return (
    <div className="grid grid-cols-4 gap-4 my-5 items-center">
      <Input 
        title="Push"
        name="Push O(1)"
        inputValue={pushValue}
        setInputValue={setPushValue}
        handleClick={handlePushClick}
      />

      <ActionButton 
        title="Pop O(1)"
        handleClick={handlePopClick}
      />

      <ClearButton handleClearClick={handleClearClick} />
    </div>
  )
}

export default StackControl
