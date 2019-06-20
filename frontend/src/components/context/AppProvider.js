import React, { Component } from 'react';
import axios from 'axios';
import AppContext from './AppContext';


class AppProvider extends Component {

  state = {
    todos: [],
    categories:[],
    addtodo:(state) => {
      console.log(state);
      axios.post('http://localhost:3000/api/todos',state)
      .then(res => this.setState({todos:res.data}));
    },
    delTodo: (id) => {
      this.setState({
        todos: this.state.todos.filter(todo => {
            if(todo.id === id){
              axios.delete('http://localhost:3000/api/todos/'+id);
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

    axios.get('http://localhost:3000/api/todos')
    .then(res => this.setState({todos:res.data}));
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
