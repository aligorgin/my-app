import React, {useState} from 'react';
import MenuPage from "./MenuPage";

const MenuIcon = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            onClick={() => {
                setIsOpen(!isOpen);
                console.log(isOpen)
            }}
            className='inline-block cursor-pointer ml-4'
        >
            {isOpen ? <MenuPage/>
                : (<div>
                        <div className='w-7 rounded h-1 bg-gray-400 my-1 transform -rotate-180'/>
                        <div className='w-7 rounded h-1 bg-gray-400 my-1 '/>
                        <div className='w-7 rounded h-1 bg-gray-400 my-1 transform rotate-180'/>
                    </div>
                )
            }
        </div>
    );
}

export default MenuIcon;