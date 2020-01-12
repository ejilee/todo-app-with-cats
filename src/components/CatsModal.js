import React, { useState, useCallback } from 'react';
import './CatsModal.scss';
import { IoIosAddCircleOutline, IoIosClose } from 'react-icons/io';
import CatsListItem from './CatsListItem.js';

const CatsModal = ({
    todos,
    catsModalState,
    cats,
    closeCatsModal,
    catAdd,
    catRemove,
    catToggleEdit,
    catModify,
}) => {
    const catsModalClass = catsModalState ? 'modalTrue' : 'modalFalse';
    const [inputValue, setInputValue] = useState('');

    const inputOnChange = useCallback(e => {
        setInputValue(e.target.value);
    }, []);

    const onSubmit = useCallback(
        e => {
            if (inputValue !== '') catAdd(inputValue);
            setInputValue('');
            e.preventDefault();
        },
        [inputValue, catAdd],
    );

    return (
        <div className={'modalWrapper ' + catsModalClass}>
            <div className="catsModal">
                <button className="closeModal" onClick={closeCatsModal}>
                    <IoIosClose />
                </button>
                <h3>Manage Categories</h3>

                <ul className="catsList">
                    {cats.map(cat => (
                        <CatsListItem
                            todos={todos}
                            cat={cat}
                            key={cat.id}
                            catRemove={catRemove}
                            catToggleEdit={catToggleEdit}
                            catModify={catModify}
                        />
                    ))}
                </ul>

                <form className="catAddForm" onSubmit={onSubmit}>
                    <input
                        className="todoInputText"
                        type="text"
                        placeholder="new category"
                        value={inputValue}
                        onChange={inputOnChange}
                        autoFocus
                    />
                    <button className="catAdd" type="submit">
                        <IoIosAddCircleOutline />
                    </button>
                </form>
            </div>
            <div className="modalBg" onClick={closeCatsModal}></div>
        </div>
    );
};

export default React.memo(CatsModal);
