import React from 'react'
import Navbar from './components/navbar/navbar';
import Admin from './pages/admin/admin';
import {BrowserRouter, Route,Routes } from 'react-router-dom';

import Register from './pages/register/register';
import Login from './pages/login/login';

 const App = () => {
  return (
    <>
    <BrowserRouter>
     <Navbar/>
     
     <Routes>
     <Route path="/*" element={<Admin/>}/>
     
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>

        
       </Routes>
     
       </BrowserRouter>
     
     
     
     
      
      
   
     </>
    
  
  )
}
export default App;
