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
const App = () => {
  return (
    <Provider store={store}>
      <div></div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products/:id' element={<Products />}></Route>
        <Route path='/notfound' element={<Notfound />}></Route>
        <Route path='*' element={<Navigate to='notfound' />}></Route>
      </Routes>
    </Provider>
  );
};

export default App;
