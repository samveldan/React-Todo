import React, { useState } from 'react';
import Header from '../header/header'
import Element from '../element/element';
import TodoAdd from '../todo-add/todo-add';
import "./todo.scss";

const Todo = () => {
    const data = [{id : 1, text : "First Text", like : true, important : true}, {id : 2, text : "Second Text", like : false, important : false}]

    let [counter, setCounter] = useState(3);
    let [items, setItems] = useState(data);

    const getInput = input => {
        return input.value;
    };

    const getValue = e => {
        const input = e.target.previousElementSibling;
        const inp = getInput(input);
        
        setCounter(oldCounter => oldCounter + 1);
        setItems(oldArray => [...oldArray, {id : counter, text : inp, like: false, important: false}]);
        input.value = "";
    };

    return (
        <div className="todo">
            <Header 
            name="TODO"
            items={items}
            />
            <div className="todo__wrapper">
                <Element data={items} setItems={setItems} items={items}/>
                <TodoAdd getInput={getInput} getValue={getValue} holder="О чём вы сейчас думаете?"/>
            </div>
        </div>
     );
}

export default Todo;