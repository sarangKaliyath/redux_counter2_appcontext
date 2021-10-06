import React from "react";
import { useState } from "react";
import { AppContext } from "../Context/ContextProvider";
import { addValue, subValue, mulValue, divValue } from "../Redux/action.js";

export const UserInput = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState(0);
  const [value, setValue] = useState(0);
  const { dispatch, getState } = React.useContext(AppContext);
  const { counter } = getState();

  const handleChange = (e) => {
    setData(e.target.value);
    setShow(false);
  };

  const handleAdd = () => {
    dispatch(addValue(Number(data)));
    setValue((prev) => prev + data);
    setShow(true);
  };

  const handleSub = () => {
    dispatch(subValue(Number(data)));
    setValue((prev) => prev - data);
    setShow(true);
  };
  const handleMul = () => {
    dispatch(mulValue(Number(data)));
    setValue((prev) => prev - data);
    setShow(true);
  };
  const handleDiv = () => {
    dispatch(divValue(Number(data)));
    if (data !== "0") {
      setValue((prev) => prev - data);
      setShow(true);
    } else {
      alert("Division not possible");
    }
  };

  return (
    <div>
      {show ? <h1>Value: {counter}</h1> : <></>}
      <input onChange={handleChange} type="number" placeholder="Enter Number" />
      <button onClick={handleAdd}>ADD</button>
      <button onClick={handleSub}>SUBTRACT</button>
      <button onClick={handleMul}>MULTIPLY</button>
      <button onClick={handleDiv}>DIVIDE</button>
    </div>
  );
};
