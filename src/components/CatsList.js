import React from 'react';
import { IoIosRemoveCircleOutline, IoMdCreate } from 'react-icons/io';
import './CatsList.scss';

const CatsList = ({ todos, cats, catRemove }) => {
    const onlickDelete = (id, name, count) => {
        let deleteMessage =
            'You have  ' +
            count +
            '  todo items in this category :  ' +
            name +
            '\n' +
            '\n' +
            'These todo items will lose their category tags.' +
            '\n' +
            'Are you sure you want to delete this category?';

        if (count === 0) {
            catRemove(id);
        } else if (count > 0 && window.confirm(deleteMessage)) {
            catRemove(id);
        } else {
            return;
        }
    };
    return (
        <ul className="catsList">
            {cats.map(cat => (
                <li className="catsListItem" data-id={cat.id} key={cat.id}>
                    <span>
                        {cat.name} (
                        {todos.filter(todo => todo.cate === cat.id).length})
                    </span>
                    <button className="editButton">
                        <IoMdCreate />
                    </button>
                    <button
                        className="deleteButton"
                        onClick={() =>
                            onlickDelete(
                                cat.id,
                                cat.name,
                                todos.filter(todo => todo.cate === cat.id)
                                    .length,
                            )
                        }
                    >
                        <IoIosRemoveCircleOutline />
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default CatsList;
