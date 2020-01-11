import React, { useState, useRef, useCallback, useReducer } from 'react';
import './App.scss';
import InputForm from './components/InputForm';
import TodoCats from './components/TodoCats';
import TodoList from './components/TodoList';
import CatsModal from './components/CatsModal.js';

// initial data array for categories
const catsData = [
    {
        id: 0,
        sort: 0,
        name: '-',
    },
    {
        id: 1,
        sort: 1,
        name: 'people',
    },
    {
        id: 2,
        sort: 2,
        name: 'cats',
    },
    {
        id: 3,
        sort: 3,
        name: 'dogs',
    },
    {
        id: 4,
        sort: 4,
        name: 'plants',
    },
];

const bulkStartNum = 3;

function createBulkTodos() {
    const array = [];
    for (let i = 1; i <= bulkStartNum; i++) {
        array.push({
            id: i,
            checked: false,
            cate: 0,
            prior: 3,
            text: `todo item #${i}`,
        });
    }
    return array;
}

function todoReducer(todos, action) {
    switch (action.type) {
        case 'INSERT':
            console.log('add t');
            return todos.concat(action.todo);
        case 'REMOVE':
            console.log('remove t');
            return todos.filter(todo => todo.id !== action.todoItemId);
        case 'TOGGLE':
            console.log('toggle t');
            return todos.map(todo =>
                todo.id === action.todoItemId
                    ? { ...todo, checked: !todo.checked }
                    : todo,
            );
        default:
            return todos;
    }
}

function catsReducer(cats, action) {
    switch (action.type) {
        case 'INSERT':
            console.log('add cat');
            return cats.concat(action.newCat);
        case 'REMOVE':
            console.log('remove cat');

            return cats.filter(cat => cat.id !== action.catItemId);
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

    // function - add new todo item
    const todoItemAdd = useCallback((inputValue, catValue, prioValue) => {
        const todo = {
            id: nextTodoId.current,
            checked: false,
            cate: catValue,
            prior: prioValue,
            text: inputValue,
        };
        dispatchTodo({ type: 'INSERT', todo });
        nextTodoId.current += 1;
    }, []);

    // function - remove todo item
    const todoItemRemove = useCallback(todoItemId => {
        dispatchTodo({ type: 'REMOVE', todoItemId });
    }, []);

    // function - toggle checkbox for todo item
    const todoItemToggle = useCallback(todoItemId => {
        dispatchTodo({ type: 'TOGGLE', todoItemId });
    }, []);

    const openCatsModal = useCallback(() => {
        setCatsModalState(true);
    }, []);

    const closeCatsModal = useCallback(() => {
        setCatsModalState(false);
    }, []);

    // function - add new todo item
    const catAdd = useCallback(inputValue => {
        const newCat = {
            id: nextCatId.current,
            sort: 2,
            name: inputValue,
        };
        dispatchCats({ type: 'INSERT', newCat });
        nextCatId.current += 1;
    }, []);

    // function - remove todo item
    const catRemove = useCallback(catItemId => {
        dispatchCats({ type: 'REMOVE', catItemId });
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
                    todoItemToggle={todoItemToggle}
                    todoItemRemove={todoItemRemove}
                />
            </main>
            <footer className="App-footer">you need new socks in 2020</footer>
        </div>
    );
}

export default App;
