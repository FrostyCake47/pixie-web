'use client';
import { useState } from 'react';
import Link from 'next/link';


const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  return (
    <div className='login'>
      <form>
        <h1 className="login-intro">Welcome back</h1>
        <h2 className="login-intro-2">Login in to continue with the journey</h2>
        <div>
          <label htmlFor='email'>Email</label>
          <input type="email" className='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
        </div>

        <div>
          <label htmlFor='pass'>Password</label>
          <input type="password" className='pass' value={pass} onChange={(e)=>{setPass(e.target.value)}} required/>

          <div className='form-links'>
            <Link href='/register' className='form-link'>Register</Link>
            <Link href='/forgotpass' className='form-link'>Forgot password?</Link>
          </div>
        </div>

        

        <button className='login-btn'>Login</button>
      </form>
    </div>

  )
}

export default Login