import './bootstrap';
import '../css/app.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Test from '../components/Test';
import Login from '../components/Login';
import Menu from '../components/Menu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Tables from '../components/DiningLayout/FrontDining';


ReactDOM.createRoot(document.getElementById('root')).render(
  // <App />
  <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<Login />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/tables" element={<Tables/>}/> 
    </Routes>
  </BrowserRouter>
)