import React from 'react'
import './to-do-list.css'
import logo from './logo.svg'
import Column from '../components/Column'

const ToDoList = props => (
  <div className="ToDoList">
    <header className="ToDoList-header">
      <img src={logo} className="App-logo" alt="logo" />
      <hr/>
    </header>
    <div className="ToDoList-box">
      <Column columnTitle="To-Do 👾"/>
      <Column columnTitle="Doing 👨🏻‍💻"/>
      <Column columnTitle="Done 👍"/>
    </div>
  </div>
)

export default ToDoList