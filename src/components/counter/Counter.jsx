import React, { useState } from 'react';
import { Button } from '../button/Button';
export const Counter = ({ initialValue = 0, increment = 1, decrement = 1}) => {
  
  const [counter, setCounter] = useState(initialValue);

  const handleIncrement = () => {
    setCounter(counter + increment);
  };
  
  const handleDecrement = () => {
    setCounter(counter - decrement);
  };
  
  const handleReset = () => {
    setCounter(initialValue);
  };

  return (
    <>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <Button onClick={handleIncrement}>+</Button>
      <Button onClick={handleDecrement}>-</Button>
      <Button onClick={handleReset}>Reset</Button>
    </>
  );
};
