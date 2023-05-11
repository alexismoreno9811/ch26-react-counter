import React, { useState } from 'react';
import { Button } from '../button/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
export const Counter = ({ initialValue = 0, increment = 1, decrement = 1}) => {
  
  const [counter, setCounter] = useState(initialValue);

  return (
    <>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <Button startIcon={<AddCircleOutlineIcon />} setCounter={setCounter} newValue={counter + increment} ></Button>
      <Button startIcon={<RemoveCircleOutlineIcon />} setCounter={setCounter} newValue={counter - decrement} ></Button>
      <Button startIcon={<RestartAltIcon/>} setCounter={setCounter} newValue={initialValue} >Reset</Button>
    </>
  );
};
