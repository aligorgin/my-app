import React from 'react';

const BackDrop = props =>(
    <div
        onClick={props.click}
        className='fixed w-full h-full bg-black opacity-30 z-40 top-0 left-0'
    />
)

export default BackDrop;