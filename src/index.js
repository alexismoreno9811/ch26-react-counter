import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import P from './components/paragraphLink/ParagraphLink';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <p href="http">texto</p> */}
    <P href="https://legacy.reactjs.org/" color="red">Página React</P>
    <P href="https://youtube.com" color="green">Página Youtube</P>
    <P href="https://linkedin.com" color="purple">Página Linkedin</P>
    <P href="#">Página Generation</P>
  </React.StrictMode>
);
