import React from 'react';

const Todos = ({todos, deleteTodo}) => {


    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <li className="collection-item" key={todo.id} onClick={() => {deleteTodo(todo.id)}} title="Click to remove from the list">
                    <span>{todo.content}</span>
                </li>
            )
        })
        ) : (
            <p className="center">You have no todo's left, yay!</p>
        )



    if (todos.length) {
        return (
            <ol className="todos collection">
                {todoList}
            </ol>
        )
    } else {
        return (
            <div className="todos collection">
                {todoList}
            </div>
        )
    }
}

export default Todos;