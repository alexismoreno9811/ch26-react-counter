import React from 'react'
import { SocialNetworks } from './components/socialNetworks/SocialNetworks';
import { NavBar } from './components/navBar/NavBar.jsx';
import { Footer } from './components/footer/Footer.jsx';
import { Counter } from './components/counter/Counter.jsx';
import { Home } from './components/home/Home.jsx';
import { Route, Routes } from 'react-router-dom';
import { NotFound } from './components/notfound/NotFound.jsx';
export const App = () => {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='social-networks' element={<SocialNetworks />} />
        <Route path='counter/1' element={<Counter initialValue={100} increment={5} decrement={5} />} />
        <Route path='counter/2' element={<Counter initialValue={0} increment={10} />} />
        <Route path='*' element={<NotFound/>} />
      </Routes>

      <Footer />
    </>
  );
};
