import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyles';
import App from './App';
import Home from './Components/Pages/Home';
import Products from './Components/Pages/Products'
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Footer from './Components/Footer/Footer';



const rootElement = document.getElementById('root');
render (
    <>
    <GlobalStyle />
    <BrowserRouter>
    <Routes>
        <Route path='/' element={ <App /> }>
        <Route index element={ <Home /> } />
        <Route path='/home' element={ <Home /> } />
        <Route path='/products' element={ <Products /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/contact' element={ <Contact /> } />
        </Route>
    </Routes>
    <Footer />
    </BrowserRouter>
    </>,
    rootElement
);

















// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );