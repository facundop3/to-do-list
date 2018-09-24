import React from 'react'
import AddTaskContaine from '../containers/Add-task-container'
import './column.css'

const Column = props =>(
  <div className="Column">
    <h3>{props.columnTitle}</h3>
    <AddTaskContaine/>
  </div>
)
export default Column