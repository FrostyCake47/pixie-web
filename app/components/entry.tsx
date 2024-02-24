import React from 'react'
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

interface EntryBlockDetails{
  id:number,
  title:string,
  subtitle:string,
  content:string,
  date:string,
  time:string,
  day:string,
}


const Entry = (props: { entry: EntryBlockDetails}) => {
  const {entry} = props;

  return (
    entry ? (
      <div className='flex flex-col px-10 py-8'>
        <div className='flex items-start justify-between'>
            <div>
                <h1 className='text-white text-[30px]'>{entry.title}</h1>
                <p className='text-neutral-400'>{entry.date} {entry.day} | {entry.time}</p>
            </div>
            <div className='flex text-white text-[1.5rem] py-4'>
                <MdModeEdit className='mx-5'/>
                <MdDelete className='mx-5'/>
            </div>
        </div>
        <p className='text-neutral-200 py-[30px]'>{entry.content}</p>
    </div>
    ) : (
      <div>empty</div>
    )
    
  )
}

export default Entry