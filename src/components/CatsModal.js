import React, { useState, useCallback } from 'react';
import './CatsModal.scss';
import { IoIosAddCircleOutline } from 'react-icons/io';
import CatsList from './CatsList.js';

const CatsModal = ({
    todos,
    catsModalState,
    cats,
    closeCatsModal,
    catAdd,
    catRemove,
}) => {
    const catsModalClass = catsModalState ? 'modalTrue' : 'modalFalse';
    const [inputValue, setInputValue] = useState('');

    const inputOnChange = useCallback(e => {
        setInputValue(e.target.value);
    }, []);

    const onSubmit = useCallback(
        e => {
            console.log(inputValue);
            catAdd(inputValue);
            setInputValue('');
            e.preventDefault();
        },
        [inputValue, catAdd],
    );

    return (
        <div className={'modalWrapper ' + catsModalClass}>
            <div className="catsModal">
                <button className="closeModal" onClick={closeCatsModal}>
                    X
                </button>
                <h3>Manage Categories</h3>

                <CatsList todos={todos} cats={cats} catRemove={catRemove} />

                <form onSubmit={onSubmit}>
                    <input
                        className="todoInputText"
                        type="text"
                        placeholder="new category"
                        value={inputValue}
                        onChange={inputOnChange}
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
