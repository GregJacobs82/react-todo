import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo'

class App extends Component {
  
  state = {
    todos: [
      { id: 1, content: 'buy some milk'  },
      { id: 2, content: 'build the same app in 2 languages: React vs. Vue' },
      { id: 3, content: 'learn advanced react js' }
    ]
  }


  deleteTodo = (id) => {
    console.log(id);
    // ADDING TO ARRAY USING MAP: 
    // let newTodos = [...this.state.todos, id];

    // DELETE FROM ARRAY:
    const newTodos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos: newTodos
    });
  }

  addTodo = (newTodo) => {
    newTodo.id = Math.random();
    let newTodos = [...this.state.todos, newTodo];
    this.setState({
      todos: newTodos
    })
  }


  render() {
    return (
      <div className="todo-app container">
        <div className="center">
          <h1 className="blue-text">Todo's</h1>
          <p>A simple react todo list</p>
          <h6>by Gregory Jacobs</h6>
          <br/>
        </div>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <br/>
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
