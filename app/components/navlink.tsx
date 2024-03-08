import Link from 'next/link'
import React from 'react'

const NavLink = (props: {href : string, text: string}) => {
    const {href, text} = props;
  return (
    <Link href={href} className="flex flex-row mx-2 py-1 my-3 rounded-[10px] items-center justify-center px-5 transition-colors transform ease-in-out duration-300 bg-gradient-to-r from-neutral-900 to-neutral-900 hover:shadow-lg shadow-neutral-700/50 hover:from-zinc-600 hover:to-zinc-900 cursor-pointer">{text}</Link>
  )
}

export default NavLink