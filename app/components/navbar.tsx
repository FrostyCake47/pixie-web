import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <nav className="navbar">
        <Link href='/login' className="nav-link">Login</Link>
        <Link href='/about' className="nav-link">About</Link>
    </nav>
  )
}

export default NavBar