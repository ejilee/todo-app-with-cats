import React, { useState, useCallback } from 'react';
import {
    IoIosRemoveCircleOutline,
    IoMdCreate,
    IoIosCheckmark,
    IoIosClose,
} from 'react-icons/io';
import './CatsListItem.scss';

const CatsListItem = ({ todos, cat, catRemove, catToggleEdit, catModify }) => {
    const { id, name, isBeingEdited } = cat;

    const count = todos.filter(todo => todo.cate === id).length;

    const [inputValue, setInputValue] = useState(name);

    const inputOnChange = useCallback(e => {
        setInputValue(e.target.value);
    }, []);

    const inputOnSubmitEdit = useCallback(
        e => {
            catToggleEdit(id);
            catModify(id, inputValue);
            e.preventDefault();
        },
        [id, inputValue, catToggleEdit, catModify],
    );

    const onCatDelete = useCallback(
        (id, name, count) => {
            let deleteMessage =
                'You have  ' +
                count +
                '  todo items in this category :  ' +
                name +
                '\n' +
                '\n' +
                'These todo items will be listed under uncategorized.' +
                '\n' +
                'Are you sure you want to delete this category?';

            if (id !== 0 && count === 0) {
                catRemove(id);
            } else if (id !== 0 && count > 0 && window.confirm(deleteMessage)) {
                catRemove(id);
            } else {
                return;
            }
        },
        [catRemove],
    );

    return (
        <li className="catsListItem" data-id={id} key={id}>
            {isBeingEdited ? (
                <form className="catName" onSubmit={inputOnSubmitEdit}>
                    <input
                        className="catNameEdit"
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
                        onClick={() => catToggleEdit(id)}
                    >
                        <IoIosClose />
                    </button>
                </form>
            ) : (
                <>
                    <span className="catName">
                        {name} ({count})
                    </span>
                    <button
                        className="editButton"
                        onClick={() => catToggleEdit(id)}
                    >
                        <IoMdCreate />
                    </button>

                    {id !== 0 ? (
                        <button
                            className="deleteButton"
                            onClick={() => onCatDelete(id, name, count)}
                        >
                            <IoIosRemoveCircleOutline />
                        </button>
                    ) : null}
                </>
            )}
        </li>
    );
};

export default React.memo(CatsListItem);
