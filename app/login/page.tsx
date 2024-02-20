'use client';
import { useState } from 'react';
import Link from 'next/link';
import {Lavishly_Yours } from "next/font/google";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import NavBar from '../components/navbar';



const LavishlyYours = Lavishly_Yours({weight: "400", subsets: ["latin"]});


const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  return (
    <div>
      <NavBar/>
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
      
          <div className='flex'>
            <p className='pt-5 text-sm'>Or continue with</p>
          </div>
          
          <div className='flex flex-row pt-6 px-5 place-content-evenly'>
            <FcGoogle className='size-10 mx-6'/>
            <FaApple className='size-10 mx-6'/>
          </div>
        </form>
      </div>
    </div>

  )
}

export default Login