import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import './theme.css';



import Home from './routes/Home'
import Register from './routes/auth/Register'
import Login from './routes/auth/Login'
import Logout from './routes/auth/Logout'
import SearchPage from './routes/vendor/SearchPage'
import VendorPage from './routes/vendor/VendorPage'
import Account from './routes/account/Account'
import MyVendors from './routes/account/MyVendors'
import Chat from './routes/Chat'
import ProtectedRoutes from './routes/ProtectedRoutes';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path = '/auth/register' element = {<Register/>}/>
      <Route path = '/auth/login' element = {<Login/>}/>
      <Route path = '/auth/logout' element = {<Logout/>}/>

      {/* <Route path = '/vendor/:id/chat' element = 
        {
          <ProtectedRoutes>
            <Chat/>
          </ProtectedRoutes>
        }
      /> */}
      <Route path = '/vendor/:id/chat' element = {<Chat/>}/>
      <Route path = '/vendor/:id' element = {<VendorPage/>}/>
      <Route path = '/vendor' element = {<SearchPage/>}/>
      <Route path = '/account' element = {<Account/>}/>
      <Route exact path = '/' element = {<Home/>}/>


    </Routes>
  </BrowserRouter>
);


