import React, { useState } from 'react';

import './InputField.css';

const InputField = props => {

    const [textValue, setTextValue] = useState('');

    const onSubmitHandler = event => {
        event.preventDefault();
        
        const newGoal = {
            id: Math.random().toString(),
            text: textValue
        }

        props.onNewGoal(newGoal);

        setTextValue('');
    }

    const onChangeHandler = (event) => {
        setTextValue(event.target.value);
    }

    return (
        <form className="input-container" onSubmit={onSubmitHandler}>
            <input type="text" value={textValue} onChange={onChangeHandler} />
            <button type="submit">Dodaj</button>
        </form>
    );
}

export default InputField;