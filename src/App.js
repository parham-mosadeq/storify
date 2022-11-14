import React from 'react';
// router
import { Route, Navigate, Routes } from 'react-router-dom';
//redux
import store from './redux/store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>hello</h1>
      </div>
    </Provider>
  );
};

export default App;
