import React from 'react';
import './TodoTabs.scss';
import { IoMdFlower } from 'react-icons/io';

const TodoTabs = ({ cats, todos, openCatsModal, currentTab, changeCurrentTab }) => {

    return (
        <div>
            <ul className="TodoListCatsList">
                <li className={"TodoListCat " + (currentTab === 'all' ? 'currentCat' : '')} onClick={() => changeCurrentTab('all')}>all ({todos.length})</li>
                {cats.map(cat => (
                    <li className={"TodoListCat " + (currentTab === cat.id ? 'currentCat' : '')} key={cat.id} onClick={() => changeCurrentTab(cat.id)}>
                        {cat.name} (
                        {todos.filter(todo => todo.cate === cat.id).length})
                    </li>
                ))}
                <li
                    className="TodoListCat TodoListCatAdd"
                    onClick={() => openCatsModal()}
                >
                    <IoMdFlower />
                </li>
            </ul>
            <div className="TodoListCatsListBottom"></div>
        </div>
    );
};

export default React.memo(TodoTabs);
