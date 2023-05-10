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
      <Counter initialValue={100} increment={5} decrement={5} />
      <Counter initialValue={0} increment={10} />
      <Footer />
    </>
  );
};
