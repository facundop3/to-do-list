import React, {Component} from 'react'
import Task from '../components/Task'
class TaskContainer extends Component {
  state ={

  }

  handleDoneClick = event => {
    event.target.parentElement.style.textDecoration ="line-through"
  }
  render (){
    return (
      <Task handleDoneClick={this.handleDoneClick}/>
    )
  }
}
export default TaskContainer