import React, {useState} from 'react';
import Toolbar from "./Toolbar/Toolbar";
import SideDrawer from "./sideDrawer/SideDrawer";
import BackDrop from "./backDrop/Backdrop";

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

    let sideDrawer;
    let backDrop;

    if (isOpen) {
        sideDrawer = <SideDrawer/>;
        backDrop = <BackDrop click={backDropClickHandler}/>
    }

    return (
        <div className='h-full'>
            <Toolbar drawerClickHandler={drawerToggleClickHandler}/>
            {sideDrawer}
            {backDrop}
            <main className='mt-16'>
                <p>Page content</p>
            </main>
        </div>
    )
}

export default App;