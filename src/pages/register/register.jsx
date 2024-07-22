import React from 'react'
import './register.css'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate=useNavigate();
  return (<>
  
    
    <div className='main'>
        
        <div className='signup'>
        <h2>SIGN UP</h2>
          <label>Name
          <input type='text' placeholder='Enter your name'></input></label>
          <label>Email Id
          <input type='email' placeholder='Enter your email id'></input></label>
          <label>Password
          <input type='password' placeholder='Enter your password'></input></label>
          <label>Re-password
          <input type='password' placeholder='Enter your password'></input></label>
          <br />
          <div style={{display:'flex',flexDirection:'column'}}>
          <p ><em>Already have an account?</em><h4 style={{color:'brown',textDecoration:'underline'}}onClick={()=>navigate('/login')}>LOGIN</h4></p>
          </div>
          <button onClick={()=>navigate('/login')}>Sign up</button>
          <br />

        </div>
        
    </div>
    
    </>
  )
}

export default Register;