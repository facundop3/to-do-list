import React from 'react'
import './task.css'
import Button from './Button'
const Task = props => (
  <div className="Task-box">
    <h1 className="Task">{props.children} &nbsp; <Button handleDoneClick={props.handleDoneClick}>done!</Button></h1>
    <small>TO-DO:Add date</small>
  </div>
)

export default Task