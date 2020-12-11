import React from 'react';
import DrawerToggleButton from "../sideDrawer/DrawerToggleButton";
import MenuIcon from "../MenuIcon";
import me2 from "../../assets/me2.jpg";

const Toolbar = props => (
    <header className='w-full fixed shadow-md h-14 top-0'>
        <nav className='flex items-center h-full px-3'>
            <div>
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className='text-2xl font-semibold ml-4'><a href="/">Ali</a></div>
            <div className='flex-1'/>
            <div>
                <ul className='m-0 p-0  flex'>
                    <li className='mx-2'><a className='hover:text-yellow-300 active:text-yellow-300' href="/">About
                        Me</a></li>
                    <li className='mx-2'><a className='hover:text-yellow-300 active:text-yellow-300' href="/">Portfolio</a></li>
                </ul>
            </div>

        </nav>
    </header>
);

export default Toolbar;


{/*    <div className='flex justify-between items-center shadow-lg'>*/
}
{/*        /!*left*!/*/
}
{/*        <MenuIcon/>*/
}

{/*        /!*center*!/*/
}
{/*        <div className='py-1 font-semibold text-3xl tracking-wide'>Ali</div>*/
}

{/*        /!*{right}*!/*/
}
{/*        /!*my photo*!/*/
}
{/*        <div className='mr-4 my-1'>*/
}
{/*            <a href="#">*/
}
{/*                <img*/
}
{/*                    className='w-10 rounded-full shadow-md'*/
}
{/*                    src={me2}*/
}
{/*                    alt='me'*/
}
{/*                />*/
}
{/*            </a>*/
}
{/*        </div>*/
}

{/*        /!*md breakpoint*!/*/
}
{/*        <div className='flex items-center mr-3 hidden'>*/
}
{/*            <a href='#' className='mr-3 cursor-pointer'>About Me</a>*/
}
{/*            <a href='#' className='mr-3 cursor-pointer'>Portfolio</a>*/
}
{/*            <a href='#' className='mr-3 cursor-pointer'>Contact</a>*/
}
{/*        </div>*/
}
{/*    </div>*/
}
