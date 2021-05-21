import React from 'react';
import me from "../../../assets/me.png";

const ToolbarDesktop = () => {
    return (
        <header className='w-full fixed shadow-md h-16 top-0'>
            <nav className='flex h-full px-3 items-center'>
                <div>
                    <img className='shadow-lg w-10 rounded-full' src={me} alt="profile picture"/>
                </div>
                <div className='text-2xl font-semibold'>ALI</div>
            </nav>
        </header>
    )
}

export default ToolbarDesktop;

