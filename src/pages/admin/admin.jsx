import React from 'react'
import './admin.css'
import Sidebar from '../../components/sidebar/sidebar';
import { Routes,Route } from 'react-router-dom';
import Addproduct from '../../components/product/addproduct/addproduct';

import Dashboard from '../../components/dashboard/dashboard';
import Product from '../../components/product/product';
import Order from '../../components/orders/orders';
import User from '../../components/users/users';
import EditUser from '../../components/users/edit/edit';


 const Admin = () => {
  return (
   <>
    <div className='admin'>

       <Sidebar/> 
       <Routes>
       <Route path="/*" element={<Dashboard/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/addproduct" element={<Addproduct/>}/>
        <Route path="/orders" element={<Order/>}/>
        
        <Route path='/users' element={<User/>}/>
        <Route path='/edit' element={<EditUser/>}/>
        

       
        
        
        </Routes>


    </div>
    </>
    
  )
}
export default Admin;