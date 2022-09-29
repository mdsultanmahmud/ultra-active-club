import './Element.css'
import React, { useEffect, useState } from 'react';
import ShowElement from '../ShowElement/ShowElement';
const Element = () => {
    const [elements, setElements] = useState([])

    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setElements(data))
    },[])

    return (
        <div className='all-element'>
             {
            elements.map(element => <ShowElement
                element = {element}
            ></ShowElement>)
        }
        </div>
    );
};

export default Element;