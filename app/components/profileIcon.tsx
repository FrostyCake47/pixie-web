import React, { useState } from 'react'


const ProfileIcon = (props: { photoURL: string; }) => {
    const { photoURL} = props;
    const [isVisible, setIsVisible] = useState(false);


    return (
        <div>
            <img src={photoURL} alt="" className='w-8 h-8 mx-2 rounded-full' onClick={(e) => {
                    e.stopPropagation(); // Stop event propagation
                    setIsVisible(!isVisible);
                }}/>

            <div>
                <ul className={isVisible ? 'mt-20' : 'hidden'}>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            </div>
        </div>
    )
}

export default ProfileIcon