import React, { Component } from 'react';
import axios from 'axios';
import AppContext from './AppContext';


class AppProvider extends Component {

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
    categories:[],
    delTodo: (id) => {
      this.setState({
        todos: this.state.todos.filter(todo => {
            if(todo.id === id){

            } 
            else{
              return todo;
            }
        })
      });
    },
    markComplete:(id) =>{
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
    },
    addCategory:(categoryname) =>{
      // this.setState({categories:this.state.categories.push(res.data)})
      axios.post('http://localhost:3000/api/categories',{Name:categoryname})
      .then(res => this.setState({categories:res.data}));
      
    },
    deleteCategory:(id)=>{
      console.log(id);

      axios.delete('http://localhost:3000/api/categories/'+id)
      .then(res => this.setState({categories:this.state.categories.filter(category=>{
        if(category.id == res.data.id){}
        else
          return category;
      })}));
    },
    editCategory:(id)=>{
      alert('EDIT functionality will be available soon');
    }
  }

  componentDidMount() {
    console.log(this.state.categories);
    axios.get('http://localhost:3000/api/categories')
      .then(res => this.setState({categories:res.data}));
  }

  render() {
    return (
      <AppContext.Provider 
          value={this.state}>

          {this.props.children}  
      </AppContext.Provider>
  )};
}

export default AppProvider;
