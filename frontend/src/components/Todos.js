import React, { Component } from "react";
import TodoItem from './TodoItem';
import AppContext from './context/AppContext';

class Todos extends Component {
    render() {

        return <AppContext.Consumer>
                    {(context) => context.todos.map((todo) =>(
                        <TodoItem key={todo.id} todo={todo} markComplete={context.markComplete} delTodo={context.delTodo}/>

                    ))}
                </AppContext.Consumer>
        
    }
}



export default Todos;