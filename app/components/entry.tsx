"use client";
import { Lavishly_Yours } from 'next/font/google';
import React from 'react'
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { useState } from 'react';

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
  const [isEditable, setIsEditable] = useState(false);

  return (
      isEditable ? (
        <div className='flex flex-col px-10 py-8'>
          <div className='flex justify-between item-center'>
              <div>
                  <h1 className='text-white text-[30px]'>{entry.title}</h1>
                  <p className='text-neutral-400'>{entry.date} {entry.day} | {entry.time}</p>
              </div>
              <div className='flex text-white text-[1.5rem] py-4 right-0 mx-5 fixed'>
                  <FaCheck onClick={() => {setIsEditable(!isEditable)}} className='mx-5 hover:cursor-pointer text-neutral-300 hover:text-white'/>
                  <MdDelete className='mx-5'/>
              </div>
          </div>
          <p className='text-neutral-200 py-[30px]'>{entry.title}</p>
      </div>
      ) : (
        <div className='flex flex-col px-10 py-8'>
        <div className='flex justify-between item-center'>
            <div>
                <h1 className='text-white text-[30px]'>{entry.title}</h1>
                <p className='text-neutral-400'>{entry.date} {entry.day} | {entry.time}</p>
            </div>
            <div className='flex text-white text-[1.5rem] py-4 right-0 mx-5 fixed'>
                <MdModeEdit onClick={() => {setIsEditable(!isEditable)}} className='mx-5 hover:cursor-pointer text-neutral-300 hover:text-white'/>
                <MdDelete className='mx-5'/>
            </div>
        </div>
        <p className='text-neutral-200 py-[30px]'>{entry.title}</p>
    </div>)
      
  )
}

export default Entry

