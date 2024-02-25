import React, { useState } from 'react'


const ProfileIcon = (props: { photoURL: string, displayName: string, signOut: Function}) => {
    const { photoURL, displayName, signOut} = props;
    const [isVisible, setIsVisible] = useState(false);


    return (
        <div className='flex flex-col'>
            <img src={photoURL} alt="" className='w-8 h-8 mx-2 rounded-full' onClick={() => {
                setIsVisible(!isVisible)}}/>

            <div>
                <ul className={`absolute right-0 mt-2 px-10 mx-1 bg-neutral-900 rounded shadow-md z-10 ${
                    isVisible ? 'block' : 'hidden'}`}>
                    <li>{displayName}</li>
                    <li onClick={() => {signOut()}} className='nav-link'>Sign Out</li>
                    <li>Item 3</li>
                </ul>
            </div>
        </div>
    )
}

export default ProfileIcon