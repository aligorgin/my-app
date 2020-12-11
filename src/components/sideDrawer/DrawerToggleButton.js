import React from 'react';

const DrawerToggleButton = props => (
    <button
        onClick={props.click}
        className='flex flex-col h-7 w-7 justify-around p-0 box-border'
    >
        <div className='w-7 bg-black h-0.5'/>
        <div className='w-7 bg-black h-0.5'/>
        <div className='w-7 bg-black h-0.5'/>
    </button>
);

export default DrawerToggleButton;