import React from 'react';
// router
import { Route, Navigate, Routes } from 'react-router-dom';
//redux
import store from './redux/store';
import { Provider } from 'react-redux';
// components
import Products from './components/products/Products';
import Home from './components/layouts/Home';
import Notfound from './components/layouts/Notfound';
import AboutUs from './components/layouts/AboutUs';
import Navbar from './components/layouts/Navbar';
import Cart from './components/cart/Cart';
const App = () => {
  return (
    <Provider store={store}>
      <div></div>
      <>
        <Navbar />
      </>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/aboutUs' element={<AboutUs />}></Route>
        <Route path='/cart' element={<Cart />}></Route>

        <Route path='/notfound' element={<Notfound />}></Route>
        <Route path='*' element={<Navigate to='notfound' />}></Route>
      </Routes>
    </Provider>
  );
};

export default App;
