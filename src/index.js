import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';




import App from './App';
import Home from './routes/Home'
import Register from './routes/auth/Register'
import Login from './routes/auth/Login'
import Logout from './routes/auth/Logout'
import SearchPage from './routes/vendor/SearchPage'
import VendorPage from './routes/vendor/VendorPage'
import Account from './routes/account/Account'
import MyVendors from './routes/account/MyVendors'
import Chat from './routes/account/Chat'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path = '/' element = {<Home/>}/>
      <Route path = '/auth/register' element = {<Register/>}/>
      <Route path = '/auth/login' element = {<Login/>}/>
      <Route path = '/auth/logout' element = {<Logout/>}/>
      <Route path = '/vendor/:id' element = {<VendorPage/>}/>
      <Route path = '/vendor' element = {<SearchPage/>}/>
      <Route path = '/account/vendor/:id/chat' element = {<Chat/>}/>
      {/* <Route path = '/account/vendor/:id' element = {<MyVendorInfo/>}/> */}
      <Route path = '/account/vendor' element = {<MyVendors/>}/>
      <Route path = '/account' element = {<Account/>}/>

    </Routes>
  </BrowserRouter>
);


