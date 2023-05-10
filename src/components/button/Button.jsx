import React from 'react'
export const Button = ({ children, setCounter, newValue}) => {

  const handleOnClik = () => {
    setCounter( newValue );
  };

  return (
    <>
      <button style={{ color: "blue" }} onClick={ handleOnClik }>
        {children}
      </button>
    </>
  );
};
