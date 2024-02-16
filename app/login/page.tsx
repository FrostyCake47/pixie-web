'use client';
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  return (
    <div className='login'>
      <form>
        <p className="login-intro">Welcome back!</p>
        <label htmlFor='email'>Email</label>
        <input type="email" className='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>

        <label htmlFor='pass'>Password</label>
        <input type="pass" className='pass' value={pass} onChange={(e)=>{setPass(e.target.value)}} required/>

        <button className='login-btn'>Login</button>
      </form>
    </div>

  )
}

export default Login