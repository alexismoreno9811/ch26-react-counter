import React, { useState } from 'react';
import { Button } from '../button/Button';
export const Counter = ({ initialValue = 0, increment = 1, decrement = 1}) => {
  
  const [counter, setCounter] = useState(initialValue);

  return (
    <>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <Button setCounter={setCounter} newValue={counter + increment} >+</Button>
      <Button setCounter={setCounter} newValue={counter - decrement} >-</Button>
      <Button setCounter={setCounter} newValue={initialValue} >Reset</Button>
    </>
  );
};
