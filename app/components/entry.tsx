"use client";
import { Lavishly_Yours } from 'next/font/google';
import React, { useEffect } from 'react'
import { MdCheck, MdModeEdit } from "react-icons/md";
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


const Entry = (props: { entry: EntryBlockDetails, handleApplyEdit: Function, handleDelete: Function}) => {
  const {entry, handleApplyEdit, handleDelete} = props;
  const [isEditable, setIsEditable] = useState(false);

  const [title, setTitle] = useState(entry.title);
  const [subtitle, setSubtitle] = useState(entry.subtitle);
  const [content, setContent] = useState(entry.content);
  const [date, setDate] = useState(entry.date);
  const [time, setTime] = useState(entry.time);
  const [day, setDay] = useState(entry.day);

  useEffect(() => {
    setTitle(entry.title);
    setContent(entry.content);
  }, [entry]);

  return (
      !isEditable ? (
        <div className='flex flex-col px-10 py-8'>
          <div className='flex justify-between item-center'>
              <div>
                  <h1 className='text-white text-[30px]'>{title} {entry.id}</h1>
                  <p className='text-neutral-400'>{entry.date} {entry.day} | {entry.time}</p>
              </div>
              <div className='flex text-white text-[1.5rem] py-4 right-0 mx-5 fixed'>
                  <MdModeEdit onClick={() => {setIsEditable(!isEditable)}} className='mx-5 hover:cursor-pointer text-neutral-300 hover:text-white'/>
                  <MdDelete onClick={() => {handleDelete(entry.id)}} className='mx-5 hover:cursor-pointer text-neutral-300 hover:text-white'/>
              </div>
          </div>
          <p className='text-neutral-200 py-[30px]'>{content}</p>
      </div>
      ) : (
        <div className='flex flex-col px-10 py-8'>
          <form>
            <div className='flex justify-between item-center'>
                <div>
                    <input type='text' value={title} className='text-white text-[30px] bg-transparent border-none focus:outline-none w-[calc(100vw-450px)]' onChange={(e) => {setTitle(e.target.value)}}/>
                    <p className='text-neutral-400'>{entry.date} {entry.day} | {entry.time}</p>
                </div>
                <div className='flex text-white text-[1.5rem] py-4 right-0 mx-5 fixed'>
                    <FaCheck onClick={() => {
                      setIsEditable(!isEditable);
                      const updatedEntry = entry;
                      updatedEntry.title = title;
                      updatedEntry.content = content;
                      handleApplyEdit(entry.id, updatedEntry);}} 
                      className='mx-5 hover:cursor-pointer text-neutral-300 hover:text-white'/>
                </div>
            </div>
            <textarea value={content} onChange={(e) => {setContent(e.target.value)}} className='text-neutral-200 py-[30px] bg-transparent border-none focus:outline-none w-[calc(100vw-450px)] transition-all-[80ms]'/>
          </form>
      </div>)
      
  )
}

export default Entry

