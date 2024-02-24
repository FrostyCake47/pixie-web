"use client";
import React, { useEffect, useState } from 'react';
import NavBar from '../components/navbar';
import EntryBlock from '../components/entryblock';
import Entry from '../components/entry';
import { UserAuth } from '../context/AuthContext';
import { collection, addDoc, getDoc, query, onSnapshot, where } from 'firebase/firestore';
import { doc, setDoc } from "firebase/firestore";
import { db } from '../firebase';


interface EntryBlockDetails{
  id:number,
  title:string,
  subtitle:string,
  content:string,
  date:string,
  time:string,
  day:string,
}

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

  const [entry, setEntry] = useState(initialEntry);
  const [entryList, setEntryList] = useState([initialEntry]);
  const [idTracker, setIdTracker] = useState(0);
  const {user} = UserAuth();
  if(user) console.log(user.uid);

  const handleSelection = () => {
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
          console.log("idTracker " + userData.idtracker);
          const _arr: EntryBlockDetails[] = Object.keys(userData.entryblocks).map(key => userData.entryblocks[key])
          setIdTracker(userData.idtracker);
          setEntryList(_arr);

          console.log(_arr);
        }
      })
    }
  }, []);

  return (
    <div>
        {user ? (
          <div className='flex flex-row bg-neutral-800 h-screen max-h-[calc(100vh-50px)]'>
            <div className='px-2 border-r-2 border-neutral-500'>
                {entryList.map((entry) => {
                  return <EntryBlock entry={entry}></EntryBlock>
                })}
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