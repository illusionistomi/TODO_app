import React, { Component } from 'react';

export class TodoItem extends Component {
    
    render() {
        const { id, subject, status, createdAt, updatedAt} = this.props.todo;
        return (
            
            <div className="box">
              <article className="media">
                <div className="media-content">
                  <div className="content">
                    <p>
                      <strong>{subject}</strong><br/> <small>Created at: {createdAt}</small> <small>Statue: {status}</small>
                      <br/>
                    </p>
                  </div>
                  <nav className="level is-mobile">
                    <div className="level-left">
                        <a className="level-item" aria-label="like">
                            <span className="icon is-small">
                            <i className="fa fa-check" aria-hidden="true"></i>
                            </span>
                        </a>
                      
                      <a className="level-item" aria-label="retweet">
                        <span className="icon is-small">
                          <i className="fa fa-edit" aria-hidden="true"></i>
                        </span>
                      </a>
                      <a className="level-item" aria-label="reply">
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