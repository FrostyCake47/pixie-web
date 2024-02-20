import React from 'react'
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const Entry = () => {
  return (
    <div className='flex flex-col px-10 py-8'>
        <div className='flex items-start justify-between'>
            <div>
                <h1 className='text-white text-[30px]'>Small Memories</h1>
                <p className='text-neutral-400'>5 Wed | 2:30pm</p>
            </div>
            <div className='flex text-white text-[1.5rem] py-4'>
                <MdModeEdit className='mx-5'/>
                <MdDelete className='mx-5'/>
            </div>
        </div>
        <p className='text-neutral-200 py-[30px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto rem impedit delectus laborum! Expedita, neque nobis sapiente voluptatem quam molestiae tenetur, omnis recusandae nesciunt similique ullam perspiciatis adipisci fuga quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt maxime ipsum dolorum, nam libero ducimus ut, eum quidem est corrupti, laudantium maiores. Eveniet eligendi non sequi veniam totam nemo fuga.</p>
    </div>
  )
}

export default Entry