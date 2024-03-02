"use client";
import Link from 'next/link'
import React from 'react'
import {Lavishly_Yours } from "next/font/google";
import { UserAuth } from '../context/AuthContext';
import ProfileIcon from './profileIcon';
import { useRouter } from 'next/navigation';
import NavLink from './navlink';


const LavishlyYours = Lavishly_Yours({weight: "400", subsets: ["latin"]});


const NavBar = () => {
  const {user, googleSignIn, logOut} = UserAuth();
  const router = useRouter();
  console.log(user);

  const handleSignIn = async () => {
    try{
      await googleSignIn();
      router.push('/diary')
    }
    catch (error){
      console.log(error);
    }
  }

  const handleSignOut = async () => {
    try{
      await logOut();
      router.push('/login')
      console.log('logged out')
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
        </div>

        <div className='navbar-links'>
            {!user ? 
            (<div className='flex items-center'>
              <NavLink href='/' text='Home'></NavLink>
              <NavLink href='/login' text='Login'></NavLink>
              <NavLink href='/about' text='About'></NavLink>
            </div>) : 
            (<div className='flex items-center'>
              <NavLink href='/diary' text='Diary'></NavLink>
              <NavLink href='/' text='Home'></NavLink>
              <NavLink href='/about' text='About'></NavLink>

              <div className=''>
                <ProfileIcon photoURL={user.photoURL} displayName={user.displayName} signOut={handleSignOut}/>
              </div>
            </div>)}
            
        </div>
        
    </nav>
  )
}

export default NavBar