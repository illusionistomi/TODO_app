import React, { Component } from 'react';


export class TodoItem extends Component {
    
    render() {
        const { id, subject, status, category,createdAt, updatedAt} = this.props.todo;

        let creation_date = new Date(createdAt);

        return (
         

            <div className="box">
              <article className="media">
                <div className="media-content">
                  <div className="content">
                    <p>
                      <strong>{subject}</strong><br/> <small>Created at:&nbsp;
                      <strong>{creation_date.getDate()}/{creation_date.getMonth()}/{creation_date.getFullYear()} || {creation_date.getHours()}:{creation_date.getMinutes()}</strong></small> 
                      <br/>
                      <small>Category: <strong>{category}</strong></small>
                      &nbsp;&nbsp;
                      <small>Status: <strong>{status}</strong></small>
                      
                      <br/>
                    </p>
                  </div>
                  <nav className="level is-mobile">
                    <div className="level-left">
                        <a className="level-item" aria-label="like" onClick={this.props.markComplete.bind(this,id)}>
                            <span className="icon is-small">
                            <i className="fa fa-check" aria-hidden="true"></i>
                            </span>
                        </a>
                      
                      <a className="level-item" aria-label="Edit">
                        <span className="icon is-small">
                          <i className="fa fa-edit" aria-hidden="true"></i>
                        </span>
                      </a>
                      
                        <a className="level-item" aria-label="Delete" onClick={this.props.delTodo.bind(this, id)}>
                        
                          <span className="icon is-small">
                            <i className="fa fa-times" aria-hidden="true"></i>
                          </span>
                        </a>
                     
                    </div>
                  </nav>
                </div>
              </article>
            </div>

         

        )
    }
}

export default TodoItem;