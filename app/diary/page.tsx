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
import { getCurrentTimeAndDate } from '../services/getCurrentTimeAndDate';
import { FaArrowLeft } from "react-icons/fa";


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
  const [sideBarActive, setSideBarActive] = useState(true);
  const {user} = UserAuth();
  if(user) console.log(user.uid);


  const handleSelection = (id:number) => {
    for(var i=0; i<entryList.length; i++){
      if(entryList[i].id == id) setSelectedEntry(entryList[i]);
    }
  }

  const handleApplyEdit = (id:number, updatedEntry:EntryBlockDetails) => {
    const updatedEntryList = entryList;
    let entryExist = false;

    for(var i=0; i < updatedEntryList.length; i++){
      if(updatedEntryList[i].id == updatedEntry.id){
        updatedEntryList[i] = updatedEntry;
        entryExist = true;
      } 
    }

    if(entryExist){
      setEntryList(updatedEntryList)
    }
    else {
      const oldID = idTracker;
      setIdTracker(idTracker => idTracker+1);
      oldID != idTracker ? updatedEntry.id = idTracker : updatedEntry.id = idTracker+1;
      updatedEntry.subtitle = updatedEntry.content.substring(0, 40);
      updatedEntryList.push(updatedEntry);
      console.log(updatedEntryList);
      setEntryList(updatedEntryList);
    }
    
    uploadData(); 
    console.log("uploaded data");
  }

  const handleDelete = (id:number) => {
    const updatedEntryList = entryList.filter((entry) => entry.id != id)
    setEntryList(updatedEntryList);
    setSelectedEntry(initialEntry);
    console.log("deleted entry " + selectedEntry.id);
  }

  const handleAddNewEntry = () => {
    const newEntry = initialEntry;
    const {date, time, day} = getCurrentTimeAndDate();
    initialEntry.date = date.toString();
    console.log(date);
    initialEntry.time = time;
    initialEntry.day = day;
    newEntry.id = -1;
    setSelectedEntry(newEntry);
  }


  async function uploadData() {
    const data = {"entryblocks" : entryList, "idtracker" : idTracker+1}
    console.log(data);
      try {
        const result = await setDoc(doc(db, 'users', user.uid), data, {
            merge: true,
        });
    } catch (e) {
        console.log(e);
    }
  }

  async function getUser() {
    const ref = doc(db, "users", user.uid);
    const userDoc = await getDoc(ref);
    return userDoc.data();
  }

  useEffect( () => {
    if(user){
      const data = getUser();
      data.then((userData) => {
        if(userData){
          const _arr: EntryBlockDetails[] = Object.keys(userData.entryblocks).map(key => userData.entryblocks[key])
          setIdTracker(userData.idtracker);
          setEntryList(_arr);
          console.log("user data fetched again");
        }
        else{
          setIdTracker(0);
          setEntryList([]);
          console.log("created new user");
        }
      })
    }
  }, [user]);

  return (
    <div className='bg-neutral-800 overflow-auto'>
        {user ? (
          <div className='flex flex-col md:flex-row bg-neutral-800 h-screen max-h-[calc(100vh-50px)]'>
            <div className={`flex flex-col transition-transform duration-300 ${sideBarActive ? ' ' : 'translate-x-[-320px] fixed'}`}>
              <div className='flex'>
                <div  onClick={handleAddNewEntry} className='flex flex-row mx-2 py-2 my-3 rounded-[10px] items-center justify-center min-w-[300px] flex-1 bg-gradient-to-r from-zinc-500 to-zinc-600 shadow-lg shadow-neutral-700/50 transition ease-in-out hover:from-zinc-400 hover:to-zinc-600 duration-300 cursor-pointer'>
                  <div className='text-white'>New Entry</div>
                </div>
                <div  onClick={() => {setSideBarActive(!sideBarActive)}} className={`flex flex-row mx-2 py-2 my-3 rounded-[10px] items-center justify-center w-10 bg-gradient-to-r from-zinc-500 to-zinc-600 shadow-lg shadow-neutral-700/50 transition ease-in-out hover:from-zinc-400 hover:to-zinc-600 duration-300 cursor-pointer ${sideBarActive ? '' : 'rotate-180'}`}>
                  <FaArrowLeft/>
                </div>
              </div>
              <div className={`px-2 border-neutral-500 overflow-y-scroll min-w-[380px] ${sideBarActive ? '' : 'hidden'}`}>
                  {entryList.toReversed().map((entry) => {
                    return <EntryBlock entry={entry} handleSelection={handleSelection}></EntryBlock>
                  })}
              </div>
            </div>

            {selectedEntry.id ? 
            (<div className='overflow-y-scroll'>
              <Entry entry={selectedEntry} handleApplyEdit={handleApplyEdit} handleDelete={handleDelete} sideBarActive={sideBarActive}/>
            </div>) : 
            (
              <div className='flex flex-col items-center justify-center w-[100vw]'>
                <div className={LavishlyYours.className}>
                   <h1 className="pixie-diary">Pixie</h1>
                 </div>
                 <p className='text-white font-sans text-lg'>Start by creating an entry</p>
                 <p className='text-white font-sans text-lg'>Or reading out your own memory</p>
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