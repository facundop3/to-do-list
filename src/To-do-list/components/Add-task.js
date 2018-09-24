import React from 'react'
import './add-task.css'
const AddTask = props => (
  <form 
    onSubmit={props.handleSubmit}
    className="AddTask">
    <input
      placeholder="Here gords your new task"
      className="Add-Task-input"
      ref={props.setInputRef}
      />
  </form>
)
export default AddTask