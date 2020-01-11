import React from 'react';
import {
    IoIosRemoveCircleOutline,
    IoMdCreate,
    IoMdSquareOutline,
    IoIosCheckboxOutline,
} from 'react-icons/io';
import './TodoListItem.scss';

const TodoListItem = ({ cats, todo, todoItemToggle, todoItemRemove }) => {
    const { id, checked, cate, prior, text } = todo;
    const cat = cats.find(cat => cat.id === cate);
    return (
        <li
            className={
                `todoListItem todoListPriority` +
                prior +
                ` todoChecked_` +
                checked
            }
            data-id={id}
            data-priority={prior}
        >
            <button className="checkBox" onClick={() => todoItemToggle(id)}>
                {checked ? <IoIosCheckboxOutline /> : <IoMdSquareOutline />}
            </button>
            <span className="todoText">{text || '-'}</span>
            {cat !== undefined && cat.id !== 0 ? (
                <span className="catLabel">{cat.name || '-'}</span>
            ) : null}
            <button className="editButton">
                <IoMdCreate />
            </button>
            <button className="deleteButton" onClick={() => todoItemRemove(id)}>
                <IoIosRemoveCircleOutline />
            </button>
        </li>
    );
};

export default React.memo(TodoListItem);
