import React from 'react';
import './TodoCats.scss';
import { IoIosCog } from 'react-icons/io';

const TodoCats = ({ cats, todos, openCatsModal }) => {
    return (
        <div>
            <ul className="TodoListCatsList">
                <li className="TodoListCat currentCat">all ({todos.length})</li>
                {cats.map(cat => (
                    <li className="TodoListCat" key={cat.id}>
                        {cat.name} (
                        {todos.filter(todo => todo.cate === cat.id).length})
                    </li>
                ))}
                <li
                    className="TodoListCat TodoListCatAdd"
                    onClick={() => openCatsModal()}
                >
                    <IoIosCog />
                </li>
            </ul>
            <div className="TodoListCatsListBottom"></div>
        </div>
    );
};

export default React.memo(TodoCats);
