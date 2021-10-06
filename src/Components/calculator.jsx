import React from 'react';
import { incValue,decValue } from '../Redux/action.js';
import { AppContext } from '../Context/ContextProvider';


export const Calculator = () => {
    
    const { dispatch, getState } = React.useContext(AppContext);
    const { counter } = getState();

    const handleInc = () => {
        dispatch(incValue(1));        
    }
    const handleDec = () => {
        dispatch(decValue(1));
    }
    return (
        <div>
            <h1>Value:{" "}{ counter}</h1>
            <button onClick={handleInc}>Increment</button>
            <button onClick={handleDec}>Decrement</button>
        </div>
    )
}
