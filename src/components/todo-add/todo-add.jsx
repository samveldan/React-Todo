import React from 'react';

const TodoAdd = (props) => {
    return (
        <div className="todo__add-input">
            <input onChange={props.getInput} type="text" placeholder={props.holder}/>
            <button onClick={props.getValue} className="todo__add-btn">Добавить</button>
        </div>
    );
}
 
export default TodoAdd;