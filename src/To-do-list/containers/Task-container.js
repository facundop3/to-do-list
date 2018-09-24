import React, {Component} from 'react'
import Task from '../components/Task'
class TaskContainer extends Component {

  handleDoneClick = event => {
    console.log(event.target)
    console.log("Hello")
  }
  render (){
    return (
      <Task 
        handleDoneClick={this.handleDoneClick}
      />
    )
  }
}
export default TaskContainer