import React from 'react'

interface EntryBlockDetails{
  id:number,
  title:string,
  subtitle:string,
  content:string,
  date:string,
  time:string,
  day:string,
}

const EntryBlock = (props: { entry: EntryBlockDetails , handleSelection:Function}) => {
  const {entry, handleSelection} = props;

  return (
    <div onClick={() => {handleSelection(entry.id)}} className='flex min-w-[80vw] sm:min-w-[300px] w-[72vw] sm:w-[350px] flex-row px-[1rem] py-5 mb-3 rounded-[10px] items-start justify-between bg-gradient-to-r from-zinc-600 to-zinc-800 shadow-lg shadow-neutral-800/50 transition ease-in-out duration-300 hover:from-zinc-500 hover:to-zinc-700'>
        <div>
          <h3 className='text-[18px] text-white'>{entry.title}</h3>
          <p className='text-[12px] font-[400] text-neutral-400 max-w-[250px]'>{entry.subtitle}</p>
        </div>
        <div className='flex flex-col text-[10px] text-neutral-200 items-center justify-stretch'>
          <p className='py-[4px]'>{entry.time}</p>
          <p className='py-[4px]'>{entry.date}</p>
        </div>
    </div>
  )
}

export default EntryBlock