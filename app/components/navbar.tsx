"use client";
import Link from 'next/link'
import React from 'react'
import {Lavishly_Yours } from "next/font/google";
import { UserAuth } from '../context/AuthContext';
import { DiVim } from 'react-icons/di';
import ProfileIcon from './profileIcon';


const LavishlyYours = Lavishly_Yours({weight: "400", subsets: ["latin"]});

const NavBar = () => {
  const {user, googleSignIn, logOut} = UserAuth();
  console.log(user);

  const handleSignIn = async () => {
    try{
      await googleSignIn();
    }
    catch (error){
      console.log(error);
    }
  }

  const handleSignOut = async () => {
    try{
      await logOut();
    }
    catch(e){
      console.log(e);
    }
  }

  return (
    <nav className="navbar">
        <div className='flex justify-center items-center'>
          <div className={LavishlyYours.className}>
            <h1 className="pixie">Pixie</h1>
          </div>
          {user && (<p className='mx-[20px] mt-2'>{user.displayName}</p>)}
          
        </div>

        <div className='navbar-links'>
            {!user ? 
            (<div>
              <Link href='/' className="nav-link">Home</Link>
              <Link href='/login' className="nav-link">Login</Link>
              <Link href='/about' className="nav-link">About</Link>
            </div>) : 
            (<div className='flex items-center'>
              <Link href='/diary' className="nav-link">Diary</Link>
              <Link href='/' className="nav-link">Home</Link>
              <Link href='/about' className="nav-link">About</Link>
              <button onClick={handleSignOut} className='nav-link'>Sign Out</button>
              <div className=''>
                <ProfileIcon photoURL={user.photoURL}/>
              </div>
            </div>)}
            
        </div>
        
    </nav>
  )
}

export default NavBar