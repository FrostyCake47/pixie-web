import React from 'react';
import NavBar from '../components/navbar';
import EntryBlock from '../components/entryblock';

const Diary = () => {
  return (
    
    <div>
        <NavBar/>
        <div className='flex bg-neutral-800 h-screen'>
            <div className='px-5 bg-neutral-600'>
                <div>
                    <EntryBlock/>
                    <EntryBlock/>
                    <EntryBlock/>
                </div>
            </div>
            <div className='flex-1'>right</div>
        </div>
    </div>
  )
}

export default Diary