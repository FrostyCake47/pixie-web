"use client";
import React, { useState } from 'react';
import NavBar from '../components/navbar';
import EntryBlock from '../components/entryblock';
import Entry from '../components/entry';

const Diary = () => {
  const [entry, setEntry] = useState(null);
  const handleSelection = () => {

  }

  return (
    <div>
        <div className='flex flex-row bg-neutral-800 h-screen'>
            <div className='px-2 border-r-2 border-neutral-500'>
                <EntryBlock title={"mwaa"}/>
                <EntryBlock title={"waw"}/>
                <EntryBlock title={"aaa"}/>
            </div>
            <div>
              <Entry/>
            </div>
        </div>
    </div>
  )
}

export default Diary