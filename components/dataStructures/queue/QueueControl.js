import React from "react"
import ActionButton from "../shared/ActionButton"
import ClearButton from "../shared/ClearButton"
import Input from "../shared/Input"

const QueueControl = ({
  enqueueValue,
  setEnqueueValue,
  handleEnqueueClick,
  handleDequeueClick,
  handleClearClick,
}) => {
  return (
    <div className="grid grid-cols-4 gap-4 my-5 items-center">
      <Input
        title="Enqueue"
        name="Enqueue O(1)"
        inputValue={enqueueValue}
        setInputValue={setEnqueueValue}
        handleClick={handleEnqueueClick}
      />

      <ActionButton title="Dequeue O(1)" handleClick={handleDequeueClick} />

      <ClearButton handleClearClick={handleClearClick} />
    </div>
  )
}

export default QueueControl
