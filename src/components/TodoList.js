import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ cats, todos, todoItemToggle, todoItemRemove }) => {
    return (
        <div className="TodoListPage">
            <ul>
                {todos.map(todo => (
                    <TodoListItem
                        cats={cats}
                        todo={todo}
                        key={todo.id}
                        todoItemToggle={todoItemToggle}
                        todoItemRemove={todoItemRemove}
                    />
                ))}
            </ul>
        </div>
    );
};

export default React.memo(TodoList);
