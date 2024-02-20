import React from 'react'

const EntryBlock = () => {
  return (
    <div className='flex flex-row px-[1rem] py-5 my-3 rounded-[10px] items-start w-[350px] justify-between bg-gradient-to-r from-zinc-600 to-zinc-800 .shadow-lg'>
        <div>
          <h3 className='text-[18px] text-white'>title</h3>
          <p className='text-[12px] font-[400] text-neutral-400'>Subtitle thats going to be pretty long</p>
        </div>
        <div className='flex flex-col text-[10px] text-neutral-200 items-center justify-stretch'>
          <p className='py-[4px]'>5 Wed</p>
          <p className='py-[4px]'>2:30 pm</p>
        </div>
    </div>
  )
}

export default EntryBlock