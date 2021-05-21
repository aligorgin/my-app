import React, {useState, useEffect} from 'react';
import {useTransition, config, animated,} from "react-spring";

const items = [
    {id: 0, text: 'self-taught'},
    {id: 1, text: 'committed'},
    {id: 2, text: 'passionate'}
]

const FadingWords = () => {
    const [index, setIndex] = useState(0);
    const transitions = useTransition(items[index], span => span.id, {
        config: config.stiff,
        delay: 450,
        duration: 100,
        from: {
            opacity: 0,
            transform: 'translateY(10px)',
            position: 'absolute',
            top: 0,
            left: 0,
            margin: 0,
        },
        enter: {
            opacity: 1,
            transform: 'translateY(0px)',
        },
        leave: {
            opacity: 0,
            transform: 'translateY(-10px)',
        },
    });

    useEffect(() =>
            void setInterval(
                () => setIndex(current => (current + 1) % items.length),
                2500
            )
        , []);

    const renderedItems = transitions.map(({item, props, key}) => {
        return <animated.span classname='text-center w-full' key={key} style={props}> {item.text}</animated.span>
    })

    return (
        <div style={{width: '150px'}} className='font-semibold inline-block absolute italic'>{renderedItems}</div>
    )
}

export default FadingWords;