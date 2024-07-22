import React from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const navigate=useNavigate();
  return (
   
  
    
    <div className='mainin'>
        
        <div className='signin'>
        <h2>SIGN IN</h2>
          
          <label>Email Id
          <input type='email' placeholder='Enter your email id'></input></label>
          <label>Password
          <input type='password' placeholder='Enter your password'></input></label>
          
          <br />
          <button onClick={()=>navigate('/dashboard')}>Sign in</button>
          <br />

        </div>
        
    </div>
    
   
  )
}

export default Login;