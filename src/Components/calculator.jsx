import React from 'react';
import { incValue,decValue } from '../Redux/action.js';
import { useState } from 'react';
import { AppContext } from '../Context/ContextProvider';


export const Calculator = () => {
    const [value, setValue] = useState(0);
    const { dispatch, getState } = React.useContext(AppContext);
    const { counter } = getState();

    const handleInc = () => {
        dispatch(incValue(1));
        setValue((prev) => prev + 1);
        
    }
    const handleDec = () => {
        dispatch(decValue(1));
        setValue((prev) => prev-1)
    }
    return (
        <div>
            <h1>Value:{" "}{ counter}</h1>
            <button onClick={handleInc}>Increment</button>
            <button onClick={handleDec}>Decrement</button>
        </div>
    )
}
