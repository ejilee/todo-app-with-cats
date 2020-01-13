import React, { useState, useRef, useCallback, useReducer } from 'react';
import './App.scss';
import InputForm from './components/InputForm';
import TodoCats from './components/TodoCats';
import TodoList from './components/TodoList';
import CatsModal from './components/CatsModal.js';

const bulkStartNum = 2500;

function createBulkTodos() {
    const array = [];
    for (let i = 1; i <= bulkStartNum; i++) {
        array.push({
            id: i,
            checked: false,
            cate: 0,
            prior: 3,
            text: `todo item #${i}`,
            isBeingEdited: false,
        });
    }
    return array;
}

const catsData = [
    {
        id: 0,
        sort: 0,
        name: '-',
        isBeingEdited: false,
    },
    {
        id: 1,
        sort: 1,
        name: 'plants',
        isBeingEdited: false,
    },
    {
        id: 2,
        sort: 2,
        name: 'cats',
        isBeingEdited: false,
    },
    {
        id: 3,
        sort: 3,
        name: 'dogs',
        isBeingEdited: false,
    },
];

function todoReducer(todos, action) {
    switch (action.type) {
        case 'INSERT':
            return todos.concat(action.todo);
        case 'REMOVE':
            return todos.filter(todo => todo.id !== action.todoItemId);
        case 'TOGGLE_CHECK':
            return todos.map(todo =>
                todo.id === action.todoItemId
                    ? { ...todo, checked: !todo.checked }
                    : todo,
            );
        case 'TOGGLE_EDIT':
            return todos.map(todo =>
                todo.id === action.todoItemId
                    ? { ...todo, isBeingEdited: !todo.isBeingEdited }
                    : todo,
            );
        case 'MODIFY':
            return todos.map(todo =>
                todo.id === action.todoItemId
                    ? { ...todo, text: action.todoItemText }
                    : todo,
            );
        case 'UNCATEGORIZE':
            return todos.map(todo =>
                todo.cate === action.catItemId ? { ...todo, cate: 0 } : todo,
            );
        default:
            return todos;
    }
}

function catsReducer(cats, action) {
    switch (action.type) {
        case 'INSERT':
            return cats.concat(action.newCat);
        case 'REMOVE':
            return cats.filter(cat => cat.id !== action.catItemId);
        case 'TOGGLE_EDIT':
            return cats.map(cat =>
                cat.id === action.catItemId
                    ? { ...cat, isBeingEdited: !cat.isBeingEdited }
                    : cat,
            );
        case 'MODIFY':
            return cats.map(cat =>
                cat.id === action.catItemId
                    ? { ...cat, name: action.catItemText }
                    : cat,
            );
        default:
            return cats;
    }
}

function App() {
    const [todos, dispatchTodo] = useReducer(
        todoReducer,
        undefined,
        createBulkTodos,
    );
    const [cats, dispatchCats] = useReducer(catsReducer, catsData);
    const [catsModalState, setCatsModalState] = useState(false);
    let nextTodoId = useRef(bulkStartNum + 1);
    let nextCatId = useRef(5);

    const todoItemAdd = useCallback((inputValue, catValue, prioValue) => {
        const todo = {
            id: nextTodoId.current,
            checked: false,
            cate: catValue,
            prior: prioValue,
            text: inputValue,
            isBeingEdited: false,
        };
        dispatchTodo({ type: 'INSERT', todo });
        nextTodoId.current += 1;
    }, []);

    const todoItemRemove = useCallback(todoItemId => {
        dispatchTodo({ type: 'REMOVE', todoItemId });
    }, []);

    const todoItemToggleCheck = useCallback(todoItemId => {
        dispatchTodo({ type: 'TOGGLE_CHECK', todoItemId });
    }, []);

    const todoItemToggleEdit = useCallback(todoItemId => {
        dispatchTodo({ type: 'TOGGLE_EDIT', todoItemId });
    }, []);

    const todoItemModify = useCallback((todoItemId, todoItemText) => {
        // dispatchTodo({ type: 'MODIFY', todoItemId, todoItemText });
    }, []);

    const openCatsModal = useCallback(() => {
        setCatsModalState(true);
    }, []);

    const closeCatsModal = useCallback(() => {
        setCatsModalState(false);
    }, []);

    const catAdd = useCallback(inputValue => {
        const newCat = {
            id: nextCatId.current,
            sort: 2,
            name: inputValue,
            isBeingEdited: false,
        };
        dispatchCats({ type: 'INSERT', newCat });
        nextCatId.current += 1;
    }, []);

    const catRemove = useCallback(catItemId => {
        dispatchCats({ type: 'REMOVE', catItemId });
        dispatchTodo({ type: 'UNCATEGORIZE', catItemId });
    }, []);

    const catToggleEdit = useCallback(catItemId => {
        dispatchCats({ type: 'TOGGLE_EDIT', catItemId });
    }, []);

    const catModify = useCallback((catItemId, catItemText) => {
        dispatchCats({ type: 'MODIFY', catItemId, catItemText });
    }, []);

    return (
        <div className="App">
            <header className="App-header">Kitty Needs Kibbles</header>
            <main className="App-main">
                <CatsModal
                    todos={todos}
                    catsModalState={catsModalState}
                    cats={cats}
                    closeCatsModal={closeCatsModal}
                    catAdd={catAdd}
                    catRemove={catRemove}
                    catToggleEdit={catToggleEdit}
                    catModify={catModify}
                />
                <InputForm cats={cats} todoItemAdd={todoItemAdd} />
                <TodoCats
                    cats={cats}
                    todos={todos}
                    openCatsModal={openCatsModal}
                />
                <TodoList
                    cats={cats}
                    todos={todos}
                    todoItemRemove={todoItemRemove}
                    todoItemToggleCheck={todoItemToggleCheck}
                    todoItemToggleEdit={todoItemToggleEdit}
                    todoItemModify={todoItemModify}
                />
            </main>
            <footer className="App-footer">you need new socks in 2020</footer>
        </div>
    );
}

export default App;
