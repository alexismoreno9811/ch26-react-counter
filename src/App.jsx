import React from 'react'
import { SocialNetworks } from './components/socialNetworks/SocialNetworks';
import { NavBar } from './components/navBar/NavBar.jsx';
import { Footer } from './components/footer/Footer.jsx';

export const App = () => {
  return (
    <>
      <NavBar />
      <SocialNetworks /> 
      <Footer />
    </>
  )
};
