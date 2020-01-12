import React, { useState, useCallback } from 'react';
import {
    IoIosRemoveCircleOutline,
    IoMdCreate,
    IoMdSquareOutline,
    IoIosCheckboxOutline,
    IoIosCheckmark,
    IoIosClose,
} from 'react-icons/io';
import './TodoListItem.scss';

const TodoListItem = ({
    cats,
    todo,
    todoItemRemove,
    todoItemToggleCheck,
    todoItemToggleEdit,
    todoItemModify,
}) => {
    const { id, checked, cate, prior, text, isBeingEdited } = todo;
    const cat = cats.find(cat => cat.id === cate);

    const [inputValue, setInputValue] = useState(text);

    const inputOnChange = useCallback(e => {
        setInputValue(e.target.value);
    }, []);

    const inputOnSubmitEdit = useCallback(
        e => {
            todoItemToggleEdit(id);
            todoItemModify(id, inputValue);
            e.preventDefault();
        },
        [id, inputValue, todoItemToggleEdit, todoItemModify],
    );

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
            <button
                className="checkBox"
                onClick={() => todoItemToggleCheck(id)}
            >
                {checked ? <IoIosCheckboxOutline /> : <IoMdSquareOutline />}
            </button>
            {isBeingEdited ? (
                <form className="todoText" onSubmit={inputOnSubmitEdit}>
                    <input
                        className="todoEditText"
                        type="text"
                        value={inputValue}
                        onChange={inputOnChange}
                        autoFocus
                    />
                    <button
                        className="applyEdit"
                        onClick={inputOnSubmitEdit}
                        type="submit"
                    >
                        <IoIosCheckmark />
                    </button>
                    <button
                        className="cancelEdit"
                        onClick={() => todoItemToggleEdit(id)}
                    >
                        <IoIosClose />
                    </button>
                </form>
            ) : (
                <>
                    <span className="todoText">{text || '-'}</span>
                    {cat !== undefined && cat.id !== 0 ? (
                        <span className="catLabel">{cat.name || '-'}</span>
                    ) : null}
                    <button
                        className="editButton"
                        onClick={() => todoItemToggleEdit(id)}
                    >
                        <IoMdCreate />
                    </button>
                    <button
                        className="deleteButton"
                        onClick={() => todoItemRemove(id)}
                    >
                        <IoIosRemoveCircleOutline />
                    </button>
                </>
            )}
        </li>
    );
};

export default React.memo(TodoListItem);
