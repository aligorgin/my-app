import React, {useState} from 'react';
import Toolbar from "./navBar/Toolbar/Toolbar";
import SideDrawer from "./navBar/SideDrawer";
import BackDrop from "./navBar/Backdrop";
import ImageTitle from "./ImageTitle";

const App = () => {
    const [isOpen, setIsOpen] = useState(false);

    const drawerToggleClickHandler = () => {
        setIsOpen(prevState => {
            return !prevState
        });
    };

    const backDropClickHandler = () => {
        setIsOpen(false);
    }

    let backDrop;

    if (isOpen) {
        backDrop = <BackDrop click={backDropClickHandler}/>
    }

    return (
        <div>
            <div className='h-full'>
                <Toolbar drawerClickHandler={drawerToggleClickHandler}/>
                <SideDrawer show={isOpen}/>
                {backDrop}
            </div>
            <ImageTitle/>
        </div>
    )
}

export default App;