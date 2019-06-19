import React, { Component } from 'react';

export class Category_form extends Component {
    
    render() {
        return (
          <div className="container">  
            <h2 className="title">
              Add New Category.
            </h2>

            <div className="field">
              <label className="label">Subject</label>
              <div className="control">
                <input className="input" type="text" placeholder="Text input"/>
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

export default Category_form;