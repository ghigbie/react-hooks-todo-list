import React from 'react';

const TodoList = ({todos})  => {
    return (
        <>
        {todos.map(todo => (
            <li>
                {todo.task}
            </li>
        ))}
        </>
    );
}

export default TodoList;
