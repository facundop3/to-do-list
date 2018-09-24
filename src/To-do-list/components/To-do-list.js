import React from 'react'
import './to-do-list.css'
import logo from './logo.svg'
import AddTaskContainer from '../containers/Add-task-container'

const ToDoList = props => (
  <div className="ToDoList">
    <img src={logo} className="App-logo" alt="logo" />
    <h1>To do list </h1>
    <hr/>
    <AddTaskContainer />
  </div>
)

export default ToDoList