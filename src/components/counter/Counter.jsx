import React, { useState } from 'react';

export const Counter = () => {

  const initial = 100;

  const [counter, setCounter] = useState(initial);

  //console.log("Renderizando counter");

  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  
  const handleDecrement = () => {
    setCounter(counter - 1);
  };
  
  const handleReset = () => {
    setCounter(initial);
  };

  return (
    <>
      <h1>Counter</h1>
      <h2>{ counter }</h2>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};
