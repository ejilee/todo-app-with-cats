import React, { useState, useCallback } from 'react';
import {
    IoIosRemoveCircleOutline,
    IoMdCreate,
    IoIosCheckmark,
    IoIosClose,
} from 'react-icons/io';
import './CatsListItem.scss';

const CatsListItem = ({
    todosCount,
    cat,
    catRemove,
    catToggleEdit,
    catModify,
}) => {
    const { id, name, isBeingEdited } = cat;

    const [inputValue, setInputValue] = useState(name);

    const inputOnChange = useCallback(e => {
        setInputValue(e.target.value);
    }, []);

    const inputOnKey = useCallback(
        e => {
            if (e.keyCode === 27) catToggleEdit(id);
        },
        [id, catToggleEdit],
    );

    const inputOnSubmitEdit = useCallback(
        e => {
            catToggleEdit(id);
            catModify(id, inputValue);
            e.preventDefault();
        },
        [id, inputValue, catToggleEdit, catModify],
    );

    const inputOnCancelEdit = useCallback(
        () => {
            setInputValue(name);
            catToggleEdit(id);
        },
        [id, name, catToggleEdit]
    );

    const onCatDelete = useCallback(
        (id, name, todosCount) => {
            let deleteMessage =
                'You have  ' +
                todosCount +
                '  todo items in this category :  ' +
                name +
                '\n' +
                '\n' +
                'These todo items will be listed under uncategorized.' +
                '\n' +
                'Are you sure you want to delete this category?';

            if (id !== 0 && todosCount === 0) {
                catRemove(id);
            } else if (
                id !== 0 &&
                todosCount > 0 &&
                window.confirm(deleteMessage)
            ) {
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
                        maxLength="24"
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
                        onClick={inputOnCancelEdit}
                    >
                        <IoIosClose />
                    </button>
                </form>
            ) : (
                <>
                    <span className="catName">
                        {inputValue} ({todosCount})
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
                            onClick={() =>
                                onCatDelete(id, inputValue, todosCount)
                            }
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
