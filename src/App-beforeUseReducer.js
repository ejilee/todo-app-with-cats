import React, { useState, useRef, useCallback } from 'react';
import './App.scss';
import InputForm from './components/InputForm';
import TodoListCats from './components/TodoListCats';
import TodoList from './components/TodoList';

// initial data array for categories
const catsData = [
    {
        id: 0,
        active: true,
        todosCount: 1,
        sort: 1,
        name: 'uncategorized',
    },
    {
        id: 1,
        active: true,
        todosCount: 1,
        sort: 2,
        name: 'cats',
    },
    {
        id: 2,
        active: true,
        todosCount: 2,
        sort: 3,
        name: 'dogs',
    },
    {
        id: 3,
        active: true,
        todosCount: 1,
        sort: 4,
        name: 'plants',
    },
];

// initial data array for todo items
const todosData = [
    {
        id: 0,
        checked: false,
        cate: 0,
        prior: 4,
        text: 'make applepie',
    },
    {
        id: 1,
        checked: true,
        cate: 1,
        prior: 4,
        text: 'blame the dog',
    },
    {
        id: 2,
        checked: false,
        cate: 2,
        prior: 3,
        text: 'water the plants',
    },
    {
        id: 3,
        checked: false,
        cate: 3,
        prior: 1,
        text: 'rescue the fish',
    },
    {
        id: 4,
        checked: true,
        cate: 2,
        prior: 2,
        text: 'feed the cat',
    },
];

function createBulkTodos() {
    const array = [];
    for (let i = 1; i < 2500; i++) {
        array.push({
            id: i,
            checked: false,
            cate: 0,
            prior: 4,
            text: `todo item #${i}`,
        });
    }
    return array;
}

function App() {
    const [todos, setTodos] = useState(createBulkTodos);
    const [cats, setCats] = useState(catsData);
    let nextTodoId = useRef(5);

    // function - add new todo item
    const todoItemAdd = useCallback(
        // params passed - input text, category id number, priority number
        (inputValue, catValue, prioValue) => {
            // update todo array
            const todo = {
                id: nextTodoId.current,
                checked: false,
                cate: catValue,
                prior: prioValue,
                text: inputValue,
            };
            setTodos(todos => todos.concat(todo));

            // update category array
            setCats(cats =>
                cats.map(cat =>
                    cat.id === catValue
                        ? { ...cat, todosCount: cat.todosCount + 1 }
                        : cat,
                ),
            );

            // update next todo item id number
            nextTodoId.current += 1;
        },
        [],
    );

    // function - toggle checkbox for todo item
    const todoItemToggle = useCallback(todoItemId => {
        setTodos(todos =>
            todos.map(todo =>
                todo.id === todoItemId
                    ? { ...todo, checked: !todo.checked }
                    : todo,
            ),
        );
    }, []);

    // function - remove todo item
    const todoItemRemove = useCallback((todoItemId, catValue) => {
        setTodos(todos => todos.filter(todo => todo.id !== todoItemId));

        updateCatCount(todoItemId, 'decrease');
        // update category array
        // setCats(cats =>
        //     cats.map(cat =>
        //         cat.id === catValue
        //             ? { ...cat, todosCount: cat.todosCount - 1 }
        //             : cat,
        //     ),
        // );
    }, []);

    const updateCatCount = useCallback((catId, action) => {
        switch (action) {
            case 'increase':
                setCats(cats =>
                    cats.map(cat =>
                        cat.id === catId
                            ? { ...cat, todosCount: cat.todosCount + 1 }
                            : cat,
                    ),
                );
                break;
            case 'decrease':
                setCats(cats =>
                    cats.map(cat =>
                        cat.id === catId
                            ? { ...cat, todosCount: cat.todosCount - 1 }
                            : cat,
                    ),
                );
                break;
            default:
                break;
        }
    });

    return (
        <div className="App">
            <header className="App-header">Kitty Needs Kibbles</header>
            <main className="App-main">
                <InputForm cats={cats} todoItemAdd={todoItemAdd} />
                <TodoListCats cats={cats} />
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
