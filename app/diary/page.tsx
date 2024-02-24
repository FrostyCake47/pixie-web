"use client";
import React, { useState } from 'react';
import NavBar from '../components/navbar';
import EntryBlock from '../components/entryblock';
import Entry from '../components/entry';
import { UserAuth } from '../context/AuthContext';

const Diary = () => {
  const [entry, setEntry] = useState(null);
  const {user} = UserAuth();
  const handleSelection = () => {
  
  }

  return (
    <div>
        {user ? (
          <div className='flex flex-row bg-neutral-800 h-screen max-h-[calc(100vh-50px)]'>
            <div className='px-2 border-r-2 border-neutral-500'>
                <EntryBlock title={"mwaa"}/>
                <EntryBlock title={"waw"}/>
                <EntryBlock title={"aaa"}/>
            </div>
            <div>
              <Entry/>
            </div>
          </div>
      ) : (
        <div className='flex flex-col bg-neutral-800 h-[calc(100vh-50)] justify-center items-center'>
          <div className='text-white text-3xl'>Please login to access this page</div>
        </div>
      )}
      </div>
  )
}

export default Diary