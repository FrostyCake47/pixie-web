import React, { useState } from 'react'


const ProfileIcon = (props: { photoURL: string, displayName: string, signOut: Function}) => {
    const { photoURL, displayName, signOut} = props;
    const [isVisible, setIsVisible] = useState(false);


    return (
        <div className='flex flex-col'>
            <img src={photoURL} alt="" className='min-w-8 w-8 min-h-8 h-8 mx-2 rounded-full ' onClick={() => {
                setIsVisible(!isVisible)}}/>

            <div>
                <ul className={`absolute flex flex-col justify-center items-center right-0 mt-2 px-10 mx-1 bg-neutral-900 rounded shadow-md z-10 ${
                    isVisible ? 'block' : 'hidden'}`}>
                    <li className='mt-2'>{displayName}</li>
                    <li onClick={() => {signOut()}} className='nav-link'>Sign Out</li>
                </ul>
            </div>
        </div>
    )
}

export default ProfileIcon