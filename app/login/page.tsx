'use client';
import { useState } from 'react';
import Link from 'next/link';
import {Lavishly_Yours } from "next/font/google";


const LavishlyYours = Lavishly_Yours({weight: "400", subsets: ["latin"]});


const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  return (
    <div className='login'>
      <div className='login-left'>
        <div className={LavishlyYours.className}>
            <h1 className="pixie">Pixie</h1>
        </div>
        <p className='intro'>Whether you're seeking a space to pour out your deepest thoughts, celebrate moments of joy and triumph, or simply unwind and reflect on the day's events, Pixie is here to accompany you on your journey.</p>
      </div>

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