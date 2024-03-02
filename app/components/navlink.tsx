import Link from 'next/link'
import React from 'react'

const NavLink = (props: {href : string, text: string}) => {
    const {href, text} = props;
  return (
    <Link href={href} className="flex flex-row mx-2 py-1 my-3 rounded-[10px] items-center justify-center px-5 bg-gradient-to-r from-zinc-500 to-zinc-600 shadow-lg shadow-neutral-700/50 transition-all ease-in-out hover:from-zinc-400 hover:to-zinc-600 duration-300 cursor-pointer">{text}</Link>
  )
}

export default NavLink