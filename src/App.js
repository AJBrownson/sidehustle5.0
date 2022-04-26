import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/Pages/About';
import Home from "./Components/Pages/Home";


export default function App() {
  return (
    <>
      <Navbar />
      <About />
      <Home />
    </>
  );
}