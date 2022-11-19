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
import Comments from './components/comments/Comments';
const App = () => {
  return (
    <Provider store={store}>
      <div></div>
      <>
        <Navbar />
      </>
      <Routes>
        <Route path='/' element={<Home />}></Route>

        {/* products routes start*/}
        <Route path='/products' element={<Products />}></Route>
        <Route path='products/:id/' element={<Product />}>
          <Route path='comments' element={<Comments />}></Route>
        </Route>

        {/* products routes end */}

        {/* cat start */}
        <Route
          path='/products/categories/:category'
          element={<Categories />}
        ></Route>
        {/* cat end */}

        {/* about us start */}
        <Route path='/aboutUs' element={<AboutUs />}></Route>
        {/* about us end */}

        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/cart' element={<Cart />}></Route>

        {/* notfound */}
        <Route path='/notfound' element={<Notfound />}></Route>
        <Route path='*' element={<Navigate to='notfound' />}></Route>
      </Routes>
    </Provider>
  );
};

export default App;
