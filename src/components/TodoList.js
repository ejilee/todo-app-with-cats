import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({
    cats,
    todos,
    todoItemRemove,
    todoItemToggleCheck,
    todoItemToggleEdit,
    todoItemModify,
}) => {
    return (
        <div className="TodoListPage">
            <ul>
                {todos.map(todo => (
                    <TodoListItem
                        cats={cats}
                        todo={todo}
                        key={todo.id}
                        todoItemRemove={todoItemRemove}
                        todoItemToggleCheck={todoItemToggleCheck}
                        todoItemToggleEdit={todoItemToggleEdit}
                        todoItemModify={todoItemModify}
                    />
                ))}
            </ul>
        </div>
    );
};

export default React.memo(TodoList);
