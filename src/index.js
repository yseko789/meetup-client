import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';



import App from './App';
import Home from './routes/Home'
import Register from './routes/auth/Register'
import Login from './routes/auth/Login'
import SearchPage from './routes/vendor/SearchPage'
import VendorPage from './routes/vendor/VendorPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path = '/' element = {<Home/>}/>
      <Route path = '/auth/register' element = {<Register/>}/>
      <Route path = '/auth/login' element = {<Login/>}/>
      <Route path = '/vendor/:id' element = {<VendorPage/>}/>
      <Route path = '/vendor' element = {<SearchPage/>}/>

    </Routes>
  </BrowserRouter>
);


