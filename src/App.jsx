import React from 'react'
import { SocialNetworks } from './components/socialNetworks/SocialNetworks';
import { NavBar } from './components/navBar/NavBar.jsx';
import { Footer } from './components/footer/Footer.jsx';
import { Counter } from './components/counter/Counter.jsx';

export const App = () => {
  return (
    <>
      <NavBar />
      <SocialNetworks /> 
      <Counter />
      <Footer />
    </>
  )
};
