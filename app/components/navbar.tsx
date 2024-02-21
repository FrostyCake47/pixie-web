"use client";
import Link from 'next/link'
import React from 'react'
import {Lavishly_Yours } from "next/font/google";
import { UserAuth } from '../context/AuthContext';


const LavishlyYours = Lavishly_Yours({weight: "400", subsets: ["latin"]});

const NavBar = () => {
  const {user} = UserAuth();
  console.log(user);

  return (
    <nav className="navbar">
        <div className={LavishlyYours.className}>
          <h1 className="pixie">Pixie</h1>
        </div>

        <div className='navbar-links'>
            <Link href='/diary' className="nav-link">Diary</Link>
            <Link href='/' className="nav-link">Home</Link>
            <Link href='/login' className="nav-link">Login</Link>
            <Link href='/about' className="nav-link">About</Link>
        </div>
        
    </nav>
  )
}

export default NavBar