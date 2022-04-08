import React from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import Home from './pages/Home/Home'
import Shop from './pages/Shop/Shop';
import Navigation from "./pages/Navigation/Navigation";
import Authentication from './pages/Authentication/Authentication';
import Checkout from './pages/Checkout/Checkout';

const App = () => {

  return (
    <Routes>
      <Route path='/' element = {<Navigation/>}>
        <Route index element = {<Home/>}/>
        <Route path='shop' element = {<Shop/>}/>
        <Route path='auth' element = {<Authentication/>}/>
        <Route path='checkout' element={<Checkout/>} />
      </Route>
      <Route path='*' element = {<Navigate to='/'/>}/>
    </Routes>
  );
}

export default App;

