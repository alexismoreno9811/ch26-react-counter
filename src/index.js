import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import P from './components/pharagraphLink/PharagraphLink';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <p href="http">texto</p> */}
    <P href="https://legacy.reactjs.org/" color="red"/>
    <P href="https://youtube.com" color="green"/>
    <P href="https://linkedin.com" color="purple"/>
  </React.StrictMode>
);
