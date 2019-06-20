import React, { Component } from 'react';
import AppContext from './context/AppContext';

export class Todo_form extends Component {
	constructor(props) {
		super(props);
  
		this.state ={
		  subject:'',
		  category:'',
		  status:'open'
		};
  
		this.handleSubjectChange = this.handleSubjectChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleSelectChange = this.handleSelectChange.bind(this);
		// this.state = this.state.bind(this);
	}

	handleSubjectChange (event){
		this.setState({subject:event.target.value});
	  }
	handleSelectChange(event){
		this.setState({category:event.target.value});
	}
  
	handleSubmit(event){
		event.preventDefault();
		this.props.addtodo(this.state);
		this.setState({
						subject:'',
						category:''
						});
	}
	

    render() {
        return (
              
            <div className="container">  
				<h2 className="title">
					Add Task.
				</h2>
				<form onSubmit={this.handleSubmit}>
					<div className="field">
						<label className="label">Subject</label>
						<div className="control">
						<input onChange={this.handleSubjectChange} value={this.state.subject} className="input" type="text" placeholder="Text input"/>
						</div>
					</div>

					<div className="field">
						<label className="label">Category</label>
						<div className="control">
						<div className="select">
							<select onChange={this.handleSelectChange}>
								<AppContext.Consumer>
									{
										(context) => context.categories.map((category) => 
										<option 
												key={category.id} 
												value={category.name}>
											{category.name}
										</option>
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
			</form>
            </div>
            
        )
    }
}

export default Todo_form;