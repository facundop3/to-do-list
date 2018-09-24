import React from 'react'
import './task.css'
import Button from './Button'
const Task = props => (
  <div className="Task-box">
    <h1 className="Task">{props.children} <Button onClick={props.handleDoneClick}>done!</Button></h1>
  </div>
)

export default Task