"use client";
import React, { useEffect, useState } from 'react';
import NavBar from '../components/navbar';
import EntryBlock from '../components/entryblock';
import Entry from '../components/entry';
import { UserAuth } from '../context/AuthContext';
import { collection, addDoc, getDoc, query, onSnapshot, where } from 'firebase/firestore';
import { doc, setDoc } from "firebase/firestore";
import { db } from '../firebase';
import { Lavishly_Yours } from 'next/font/google';


interface EntryBlockDetails{
  id:number,
  title:string,
  subtitle:string,
  content:string,
  date:string,
  time:string,
  day:string,
}

const LavishlyYours = Lavishly_Yours({weight: "400", subsets: ["latin"]});


const Diary = () => {
  const initialEntry: EntryBlockDetails = {
    id: 0,
    title: 'title',
    subtitle: 'subtitle',
    content: 'content',
    date:'date',
    time:'time',
    day:'day'
  };

  const [selectedEntry, setSelectedEntry] = useState(initialEntry);
  const [entryList, setEntryList] = useState([initialEntry]);
  const [idTracker, setIdTracker] = useState(0);
  const {user} = UserAuth();
  if(user) console.log(user.uid);

  const handleSelection = (id:number) => {
    for(var i=0; i<entryList.length; i++){
      if(entryList[i].id == id) setSelectedEntry(entryList[i]);
    }
  }

  async function getUser() {
    const ref = doc(db, "users", user.uid);
    const userDoc = await getDoc(ref);
    return userDoc.data();
  }

  const handleApplyEdit = (id:number, updatedEntry:EntryBlockDetails) => {
    const updatedEntryList = entryList;
    for(var i=0; i < updatedEntryList.length; i++){
      if(updatedEntryList[i].id == updatedEntry.id) updatedEntryList[i] = updatedEntry;
    }
    console.log(updatedEntryList)
    setEntryList(updatedEntryList);
  }

  const handleDelete = (id:number) => {
    const updatedEntryList = entryList.filter((entry) => entry.id != id)
    setEntryList(updatedEntryList);
    setSelectedEntry(initialEntry);
    console.log("deleted entry " + selectedEntry.id);
  }

  useEffect( () => {
    if(user){
      const data = getUser();
      data.then((userData) => {
        if(userData){
          const _arr: EntryBlockDetails[] = Object.keys(userData.entryblocks).map(key => userData.entryblocks[key])
          setIdTracker(userData.idtracker);
          setEntryList(_arr);
        }
      })
    }
  }, [user]);

  return (
    <div>
        {user ? (
          <div className='flex flex-row bg-neutral-800 h-screen max-h-[calc(100vh-50px)]'>
            <div className='px-2  border-neutral-500 overflow-y-scroll min-w-[380px]'>
                {entryList.map((entry) => {
                  console.log(entry)
                  return <EntryBlock entry={entry} handleSelection={handleSelection}></EntryBlock>
                })}
            </div>

            {selectedEntry.id ? 
            (<div className='overflow-y-scroll'>
              <Entry entry={selectedEntry} handleApplyEdit={handleApplyEdit} handleDelete={handleDelete}/>
            </div>) : 
            (
              <div className='px-[calc((100vw-650px)/2)] flex flex-col justify-center items-center'>
                <div className={LavishlyYours.className}>
                   <h1 className="pixie-diary">Pixie</h1>
                 </div>
              </div>
            )}
            
          </div>
      ) : (
        <div className='flex flex-col bg-neutral-800 h-[calc(100vh-50px)] justify-center items-center'>
          <div className='text-white text-3xl'>Please login to access this page</div>
        </div>
      )}
      </div>
  )
}

export default Diary