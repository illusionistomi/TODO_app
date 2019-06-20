import React, { Component } from 'react';

export class Category_form extends Component {
    
  constructor(props) {
      super(props);

      this.state ={
        categoryname:''
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      // this.state = this.state.bind(this);
  }
    

    handleChange (event){
      console.log(this.state);
      this.setState({categoryname:event.target.value});
    }

    handleSubmit(event){
      event.preventDefault();
      this.props.addCategory(this.state.categoryname);
      this.setState({categoryname:''});
    }

    render() {
        return (
          <div className="container">  
            <h2 className="title">
              Add New Category.
            </h2>
            <form onSubmit={this.handleSubmit}>
              <div className="field">
                <label className="label">Subject</label>
                <div className="control">
                  <input value={this.state.categoryname} onChange={this.handleChange} className="input" type="text" placeholder="Text input"/>
                </div>
              </div>
              <div className="field is-grouped">
                <div className="control">
                  <button className="button is-link">Submit</button>
                </div>
              </div>
            </form>
          </div>

        )
    }
}

export default Category_form;