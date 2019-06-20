import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import Todos from './components/Todos';
import Todo_form from './components/Todo_form';
import Category_form from './components/Category_form';
import AppProvider from './components/context/AppProvider';
import AppContext from './components/context/AppContext';

class App extends Component {

  state = {
  }

  componentDidMount() {
  }

  rendercategorylist(context){
      let categories = context.categories;
      console.log(categories);
      
       return categories.map((category,index) => (
            <span key={index} className="tag is-link is-large category">
              {category.name}
              &nbsp;
              <a onClick={() => context.deleteCategory(category.id) } >
                <i class="fa fa-times"></i>
              </a>
              &nbsp;
              <a onClick={() => context.editCategory(category.id) }>
                <i class="fa fa-edit"></i>
              </a>
            </span>
            
        ));
  }

  render() {
  return (
    <AppProvider>    
        <div className="section">
            <div className="container">
              <h1 className="title">A simple TODO APP</h1>
              <h2 className="subtitle">
                Minimalistic TODO App for <strong>Small</strong> Projects
              </h2>
              <div className="tags are-medium">
                  <AppContext.Consumer>
                    {(context) => this.rendercategorylist(context)}
                  </AppContext.Consumer>
              </div>
            </div>

            <section className="section">
              <div className="columns">
                <div className="column">
                  <Todos/>
                </div>
                <div className="column">
                  <Todo_form/>
                  <br/>
                  <AppContext.Consumer>
                    {(context) => <Category_form addCategory={context.addCategory}/>}
                  </AppContext.Consumer>
                </div>
              </div>
            </section>
        </div>
    </AppProvider>
  )};
}

export default App;
