import React from "react"
import ClearButton from '../shared/ClearButton'
import Input from '../shared/Input'

const LinkedListControl = ({
  appendValue,
  appendInputTitle,
  setAppendValue,
  handleAppendClick,
  deleteValue,
  deleteInputTitle,
  setDeleteValue,
  handleDeleteClick,
  findValue,
  findInputTitle,
  setFindValue,
  handleFindClick,
  handleClearClick,
}) => {
  return (
    <div className="grid grid-cols-4 gap-4 my-5">
      <Input
        title={appendInputTitle}
        name="append"
        inputValue={appendValue}
        setInputValue={setAppendValue}
        handleClick={handleAppendClick}
      />
      <Input
        title={deleteInputTitle}
        name="delete"
        inputValue={deleteValue}
        setInputValue={setDeleteValue}
        handleClick={handleDeleteClick}
        placeholder="Delete all occurences of..."
      />
      <Input
        title={findInputTitle}
        name="find"
        inputValue={findValue}
        setInputValue={setFindValue}
        handleClick={handleFindClick}
      />
      <ClearButton handleClearClick={handleClearClick} />
    </div>
  )
}

export default LinkedListControl
