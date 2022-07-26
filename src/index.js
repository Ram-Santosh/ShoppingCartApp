import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Login from './Login';
import CardFocus from "./Card"
import Products from './Products';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import configStore from './configStore';
import { Provider } from 'react-redux';
import Cart from './Cart';
import Checkout from './Checkout';
import Summary from './Summary';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={configStore}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path='Products' element={<Products />}/>
          <Route path="Showcase" element={<CardFocus />}/>
          <Route path="Cart" element={<Cart />}/>
          <Route path='Checkout' element={<Checkout />}></Route>
          <Route path='Summary' element={<Summary />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();