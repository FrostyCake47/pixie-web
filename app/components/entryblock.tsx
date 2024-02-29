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
    <div onClick={() => {handleSelection(entry.id)}} className='flex flex-row px-[1rem] py-5 mb-3 rounded-[10px] items-start w-[350px] justify-between bg-gradient-to-r from-zinc-600 to-zinc-800 shadow-lg shadow-neutral-800/50 transition ease-in-out hover:from-zinc-500 hover:to-zinc-700 duration-300'>
        <div>
          <h3 className='text-[18px] text-white'>{entry.title}</h3>
          <p className='text-[12px] font-[400] text-neutral-400 max-w-[250px]'>{entry.content.substring(0, 40)}</p>
        </div>
        <div className='flex flex-col text-[10px] text-neutral-200 items-center justify-stretch'>
          <p className='py-[4px]'>{entry.time}</p>
          <p className='py-[4px]'>{entry.date}</p>
        </div>
    </div>
  )
}

export default EntryBlock