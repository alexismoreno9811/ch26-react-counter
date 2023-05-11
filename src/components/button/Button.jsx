import React from 'react'
import ButtonMui from '@mui/material/Button';
export const Button = ({ children, setCounter, newValue, startIcon}) => {

  const handleOnClik = () => {
    setCounter( newValue );
  };

  return (
    <>
      <ButtonMui variant="contained" startIcon={startIcon } onClick={ handleOnClik }> {children}</ButtonMui>
    </>
  );
};
