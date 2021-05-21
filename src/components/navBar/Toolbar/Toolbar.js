import React from 'react';
import DrawerToggleButton from "../DrawerToggleButton";
import ToolbarDesktop from "./ToolbarDesktop";

const Toolbar = props => (
    <div>
        <header className='w-full fixed shadow-md h-10 top-0 md:hidden'>
            <nav className='flex justify-between items-center h-full px-3 '>
                <div>
                    <DrawerToggleButton click={props.drawerClickHandler}/>
                </div>
                <div className='text-2xl font-semibold ml-5'><a href="/">ALI</a></div>
                <div>
                    <i className="far fa-smile text-2xl"></i>
                </div>
            </nav>
        </header>
        <div className='md:flex hidden'>
            <ToolbarDesktop/>
        </div>
    </div>

);

export default Toolbar;
