import React from 'react';

const SideDrawer = props => {

    let slideDrawer = 'h-full bg-white shadow-md fixed top-0 w-2/3 z-50 max-w-2xl transform -translate-x-full transition duration-700 ease-out';

    if (props.show) {
        slideDrawer = 'h-full bg-white shadow-md fixed top-0 w-2/3 z-50 max-w-2xl transform translate-x-0 transition duration-500';
    }

    return (
        <nav className={slideDrawer}>
            <ul className='flex flex-col mt-10 '>
                <li className='my-2 ml-4'><a className='text-xl hover:text-gray-400' href="/">portfolio</a></li>
                <li className='my-2 ml-4'><a className='text-xl hover:text-gray-400' href="/">About Me</a></li>
            </ul>
        </nav>
    )
};

export default SideDrawer;