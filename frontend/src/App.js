import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import Todos from './components/Todos';
import Todo_form from './components/Todo_form';
import Category_form from './components/Category_form';

class App extends Component {

  state = {
    todos: [
      {
        "id": 1,
        "subject": "Travel Index",
        "status": "open",
        "createdAt": "2019-06-19T05:46:02.561Z",
        "updatedAt": "2019-06-19T05:46:02.561Z"
      },
      {
        "id": 2,
        "subject": "Travel List",
        "status": "open",
        "createdAt": "2019-06-19T05:46:02.561Z",
        "updatedAt": "2019-06-19T05:46:02.561Z"
      },
      {
        "id": 3,
        "subject": "Travel details",
        "status": "open",
        "createdAt": "2019-06-19T05:46:02.561Z",
        "updatedAt": "2019-06-19T05:46:02.561Z"
      },
      {
        "id": 4,
        "subject": "Travel Booking",
        "status": "open",
        "createdAt": "2019-06-19T06:00:00.936Z",
        "updatedAt": "2019-06-19T06:44:25.419Z"
      },
      {
        "id": 12,
        "subject": 'Payment',
        "status": "open",
        "createdAt": "2019-06-19T06:24:03.791Z",
        "updatedAt": "2019-06-19T06:24:03.791Z"
      },
      {
        "id": 13,
        "subject": "Thank You",
        "status": "open",
        "createdAt": "2019-06-19T06:30:33.491Z",
        "updatedAt": "2019-06-19T06:30:33.491Z"
      }
    ],
    categories:[]
  }

  componentDidMount() {
    
    axios.get('http://localhost:3000/api/categories')
      .then(res => this.setState({categories:res.data}));
  }

  rendercategorylist(){
       return this.state.categories.map((category) => (
            <span key={category.id} className="tag key={category.id}">{category.name}</span>
            
        ));
  }

  markComplete = (id) => {
      this.setState({
        todos: this.state.todos.map(todo => {
          if(todo.id === id)

            if (todo.status === 'open') {
              todo.status = 'done';
            }
            else{
              todo.status = 'open';
            }
            
          return todo;
        })
      });
  }

  delTodo = (id) => {
    console.log(id);
    this.setState({
        todos: this.state.todos.filter(todo => {
          
            if(todo.id === id){
              
            }
            else{
              return todo;
            }
          
        })
      });
  }

  render() {
  return (
    <div className="section">
        <div className="container">
          <h1 className="title">A simple TODO APP</h1>
          <h2 className="subtitle">
            Minimalistic TODO App for <strong>Small</strong> Projects
          </h2>
          <div className="tags are-medium">
            {this.rendercategorylist()}
          </div>
        </div>

        <section className="section">
          <div className="columns">
            <div className="column">
              <Todos todos={this.state.todos} markComplete = {this.markComplete} delTodo={this.delTodo}/>
            </div>
            <div className="column">
              <Todo_form categories={this.state.categories}/>
              <br/>
              <Category_form/>
            </div>
          </div>
        </section>
    </div>
  )};
}

export default App;
