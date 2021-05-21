import React from 'react';
import me from '../assets/me.png';
import FadingWords from "./FadingWords";
import hand from '../assets/hand.png';

const ImageTitle = () => {

    return (
        <main className='mt-24'>
            <div>
                <img className='mx-auto rounded-full w-60' src={me} alt="profile picture"/>
            </div>
            <div className='mt-16'>
                <h3 className='text-3xl font-bold leading-normal'>
                    <div className='flex'>
                        bonjour &nbsp;
                        <img className='pb-4' src={hand} alt='a picture of hand'/>
                    </div>
                    <p>i'm Ali</p>
                </h3>
                <h4 className='text-xl leading-normal'>
                    A &nbsp;&nbsp;&nbsp;
                    <FadingWords/>
                    <p className='inline-block'>Front-end developer</p>
                </h4>
            </div>
        </main>
    )
}

export default ImageTitle;