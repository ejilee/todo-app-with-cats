import React, { useState, useCallback } from 'react';
import {
    IoIosRemoveCircleOutline,
    IoMdCreate,
    IoMdSquareOutline,
    IoIosCheckboxOutline,
    IoIosCheckmark,
    IoIosClose,
    IoIosFlag,
} from 'react-icons/io';
import './TodoListItem.scss';

const TodoListItem = ({
    cat,
    todo,
    todoItemRemove,
    todoItemToggleCheck,
    todoItemToggleEdit,
    todoItemModify,
}) => {
    const { id, checked, cate, prior, text, isBeingEdited } = todo;

    const [inputValue, setInputValue] = useState(text);

    const inputOnChange = useCallback(e => {
        setInputValue(e.target.value);
    }, []);

    const inputOnKey = useCallback(
        e => {
            if (e.keyCode === 27) todoItemToggleEdit(id);
        },
        [id, todoItemToggleEdit],
    );

    const inputOnSubmitEdit = useCallback(
        e => {
            todoItemToggleEdit(id);
            todoItemModify(id, inputValue);
            e.preventDefault();
        },
        [id, inputValue, todoItemToggleEdit, todoItemModify],
    );

    const inputCancelEdit = useCallback(
        () => {
            setInputValue(text);
            todoItemToggleEdit(id)
        },
        [id, text, todoItemToggleEdit]
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
            {prior !== 3 ? (
                <button className="priorityFlag">
                    <IoIosFlag />
                </button>
            ) : null}

            {isBeingEdited ? (
                <form className="todoText" onSubmit={inputOnSubmitEdit}>
                    <input
                        className="todoEditText"
                        type="text"
                        value={inputValue}
                        onChange={inputOnChange}
                        onKeyDown={inputOnKey}
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
                        onClick={inputCancelEdit}
                    >
                        <IoIosClose />
                    </button>
                </form>
            ) : (
                <>
                    <span className="todoText">{inputValue || '-'}</span>
                    {cat !== undefined && cat.id !== 0 ? (
                        <span className={`catLabel catNum` + cate}>
                            {cat.name || '-'}
                        </span>
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
