import React from 'react';

const DrawerToggleButton = props => (
    <button
        onClick={props.click}
        className='flex flex-col h-5 w-6 justify-around p-0 box-border focus:outline-none focus:border-none'
    >
        <div className='w-6 bg-gray-600 rounded-full h-0.5'/>
        <div className='w-6 bg-gray-600 rounded-full h-0.5'/>
        <div className='w-6 bg-gray-600 rounded-full h-0.5'/>
    </button>
);

export default DrawerToggleButton;