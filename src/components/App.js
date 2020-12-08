import React from 'react';
import me2 from '../assets/me2.jpg';
import MenuIcon from "./MenuIcon";

const App = () => {
    return (
        <div className='flex justify-between items-center shadow-lg'>
            {/*left*/}
            <MenuIcon/>

            {/*center*/}
                <div className='py-1 font-semibold text-3xl tracking-wide'>Ali</div>

            {/*{right}*/}
            {/*my photo*/}
            <div className='mr-4 my-1'>
                <a href="#">
                    <img
                        className='w-10 rounded-full shadow-md'
                        src={me2}
                        alt='me'
                    />
                </a>
            </div>

            {/*md breakpoint*/}
            <div className='flex items-center mr-3 hidden'>
                <a href='#' className='mr-3 cursor-pointer'>About Me</a>
                <a href='#' className='mr-3 cursor-pointer'>Portfolio</a>
                <a href='#' className='mr-3 cursor-pointer'>Contact</a>
            </div>
        </div>
    )
}

export default App;