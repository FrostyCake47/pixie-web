"use client";
import React, { useEffect, useState } from 'react';
import NavBar from '../components/navbar';
import EntryBlock from '../components/entryblock';
import Entry from '../components/entry';
import { UserAuth } from '../context/AuthContext';
import { collection, addDoc, getDoc, query, onSnapshot, where } from 'firebase/firestore';
import { db } from '../firebase';


const Diary = () => {
  const [entry, setEntry] = useState(null);
  const [entryList, setEntryList] = useState([])
  const {user} = UserAuth();
  if(user) console.log(user.uid);

  const handleSelection = () => {
  }

  useEffect(() => {
    if(user){
      console.log("currently in useEffect");
      const q = query(collection(db, 'users'), where('uid', '==', user.uid));
      const unsubscribe = onSnapshot(q, (querySnaphsot) => {
        querySnaphsot.forEach((doc) => {
          console.log(doc.data());
          console.log("got the data");
        });
        console.log(user)
        console.log("got the user");
      })
    }
    

  }, []);



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