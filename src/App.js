import React, { Component } from 'react';
import './App.css';
import {TodoApp} from "./todo-app/todo-app";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoApp/>
      </div>
    );
  }
}

export default App;
