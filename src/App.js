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
import Product from './components/products/Product';
import Categories from './components/category/Categories';
import Favourite from './components/layouts/Favourite';
const App = () => {
  return (
    <Provider store={store}>
      <>
        <Navbar />
      </>
      <Routes>
        <Route path='/' element={<Home />}></Route>

        {/* products routes start*/}
        <Route path='/products' element={<Products />}></Route>
        <Route path='/products/:id/*' element={<Product />}></Route>

        {/* products routes end */}
        <Route path='/favourite' element={<Favourite />}></Route>
        {/* cat start */}
        <Route path='/categories/:cat' element={<Categories />}></Route>
        {/* cat end */}

        {/* about us start */}
        <Route path='/aboutUs' element={<AboutUs />}></Route>
        {/* about us end */}

        <Route path='/cart' element={<Cart />}></Route>

        {/* notfound */}
        <Route path='/notfound' element={<Notfound />}></Route>
        <Route path='*' element={<Navigate to='notfound' />}></Route>
      </Routes>
    </Provider>
  );
};

export default App;
