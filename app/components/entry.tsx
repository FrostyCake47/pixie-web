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


const Entry = (props: {entry: EntryBlockDetails, handleApplyEdit: Function, handleDelete: Function, sideBarActive: boolean}) => {
  const {entry, handleApplyEdit, handleDelete, sideBarActive} = props;
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
    setIsEditable(false);
  }, [entry]);

  console.log(entry.date)
  return (
      !isEditable ? (
        <div className='flex flex-col px-10 py-12'>
          <div className={`flex justify-between item-center ${sideBarActive ? 'w-[calc(100vw-450px)]' : 'w-[95vw]'}`}>
              <div>
                  <h1 className='text-white text-[30px]'>{title}</h1>
                  <p className='text-neutral-400'>{entry.date} {entry.day} | {entry.time}</p>
              </div>
              <div className='flex text-white text-[1.5rem] py-4 right-0 mx-5'>
                  <MdModeEdit onClick={() => {setIsEditable(!isEditable)}} className='mx-5 hover:cursor-pointer text-neutral-300 hover:text-white'/>
                  <MdDelete onClick={() => {handleDelete(entry.id)}} className='mx-5 hover:cursor-pointer text-neutral-300 hover:text-white'/>
              </div>
          </div>
          <p className='text-neutral-200 py-[30px]'>{content}</p>
      </div>
      ) : (
        <div className='flex flex-col px-10 pt-12'>
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
            <textarea cols={20} rows={18} value={content} onChange={(e) => {setContent(e.target.value)}} className={`text-neutral-200 pt-[30px] resize-none bg-transparent border-none h-full pb-8 ${sideBarActive ? 'w-[calc(100vw-450px)]' : 'w-[95vw]'}  overflow-x-clip focus:outline-none transition-all-[80ms]`}/> {/*w-[calc(100vw-450px)]*/}
          </form>
      </div>)
  )
}

export default Entry