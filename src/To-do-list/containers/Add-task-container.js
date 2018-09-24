import React, {Component} from 'react'
import AddTask from '../components/Add-task'
import Task from '../components/Task'
class AddTaskContainer extends Component {
  state = {
    value:"",
    taskList: localStorage.getItem('taskList') ? 
              JSON.parse(localStorage.getItem('taskList')) : []
  }
  handleSubmit = event => {
    event.preventDefault()
    this.setState({
      taskList: this.state.taskList.concat([this.newTaskInput.value])
    })
    this.setLocalStorage(this.state.taskList)
    this.newTaskInput.value = ""
  }
  setInputRef = element => {
    this.newTaskInput = element
  }
  setLocalStorage = () => {
    localStorage.setItem('taskList', JSON.stringify(this.state.taskList))
  }
  getLocalStorage = () => {
    localStorage.getItem('taskList')
  }
  render(){
    return (
      <div>
        { 
          this.state.taskList.map((elem, index)=><Task key={index}>{elem}</Task> )
        }
        <AddTask 
          handleSubmit={this.handleSubmit}
          setInputRef={this.setInputRef}
        />
      </div>
    )
  }
}

export default AddTaskContainer