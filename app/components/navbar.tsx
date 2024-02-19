import Link from 'next/link'
import React from 'react'
import {Lavishly_Yours } from "next/font/google";


const LavishlyYours = Lavishly_Yours({weight: "400", subsets: ["latin"]});

const NavBar = () => {
  return (
    <nav className="navbar">
        <div className={LavishlyYours.className}>
          <h1 className="pixie">Pixie</h1>
        </div>

        <div className='navbar-links'>
            <Link href='/login' className="nav-link">Login</Link>
            <Link href='/about' className="nav-link">About</Link>
        </div>
        
    </nav>
  )
}

export default NavBar