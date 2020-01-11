import React, { useState, useCallback } from 'react';
import './InputForm.scss';
import { IoIosAddCircleOutline, IoIosFlag } from 'react-icons/io';

const InputForm = ({ cats, todoItemAdd }) => {
    const [inputValue, setInputValue] = useState('');
    const [catValue, setCatValue] = useState(0);
    const [prioValue, setPrioValue] = useState(4);

    const inputOnChange = useCallback(e => {
        setInputValue(e.target.value);
    }, []);

    const catOnChange = useCallback(e => {
        setCatValue(parseInt(e.target.value));
    }, []);

    const prioOnChange = useCallback(e => {
        setPrioValue(parseInt(e.target.value));
    }, []);

    const onSubmit = useCallback(
        e => {
            todoItemAdd(inputValue, catValue, prioValue);
            setInputValue('');
            e.preventDefault();
        },
        [todoItemAdd, inputValue, catValue, prioValue],
    );

    return (
        <div className="inputBox">
            <form onSubmit={onSubmit}>
                <input
                    className="todoInputText"
                    type="text"
                    placeholder="new entry"
                    value={inputValue}
                    onChange={inputOnChange}
                />
                <button className="todoInputButton" type="submit">
                    <IoIosAddCircleOutline />
                </button>
                <div className="inputOptionCat">
                    <select onChange={catOnChange}>
                        {cats.map(cat => (
                            <option value={cat.id} key={cat.id}>
                                {cat.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="inputOptionPrio">
                    <input
                        type="radio"
                        id="inputPriority1"
                        name="inputPriority"
                        value="1"
                        onChange={prioOnChange}
                    />
                    <label htmlFor="inputPriority1">
                        <IoIosFlag
                            style={{ color: '#df5c74' }}
                            alt="priority_high"
                        />
                    </label>
                    <input
                        type="radio"
                        id="inputPriority2"
                        name="inputPriority"
                        value="2"
                        onChange={prioOnChange}
                    />
                    <label htmlFor="inputPriority2">
                        <IoIosFlag
                            style={{ color: '#375077' }}
                            alt="priority_medium"
                        />
                    </label>
                    <input
                        type="radio"
                        id="inputPriority3"
                        name="inputPriority"
                        value="3"
                        onChange={prioOnChange}
                        defaultChecked
                    />
                    <label htmlFor="inputPriority3">
                        <IoIosFlag
                            style={{ color: '#999' }}
                            alt="priority_low"
                        />
                    </label>
                </div>
            </form>
        </div>
    );
};

export default InputForm;
