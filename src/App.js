import React, { Component } from 'react';
import './App.css';
import ToDoListContainer from './To-do-list/containers/To-do-list-container'


class App extends Component {
  render() {
    return (
      <div className="App">
          <ToDoListContainer/>
      </div>
    );
  }
}

export default App;
