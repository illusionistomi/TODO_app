import React, { Component } from 'react';
import AppContext from './context/AppContext';

export class Todo_form extends Component {
    
    render() {
        return (
              
                  <div className="container">  
                    <h2 className="title">
                      Add Task.
                    </h2>

                    <div className="field">
                      <label className="label">Subject</label>
                      <div className="control">
                        <input className="input" type="text" placeholder="Text input"/>
                      </div>
                    </div>

                    <div className="field">
                      <label className="label">Status</label>
                      <div className="control">
                        <div className="select">
                          <select>
                              <AppContext.Consumer>
                                  {
                                  (context) => context.categories.map((category) => 
                                    <option key={category.id}>{category.name}</option>
                                    )   
                                  }
                              </AppContext.Consumer>
                          </select>
                          
                        </div>
                      </div>
                    </div>

                    <div className="field is-grouped">
                      <div className="control">
                        <button className="button is-link">Submit</button>
                      </div>
                      
                    </div>
                  </div>
            
        )
    }
}

export default Todo_form;