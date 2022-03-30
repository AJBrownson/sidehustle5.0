import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import MainPage from './Components/Pages/MainPage';
import GlobalStyles from './GlobalStyles'


export default function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <MainPage />
    </>
  );
}


