import React, { useEffect, useState } from 'react';
import ShowElement from '../ShowElement/ShowElement';
import './Catagory.css'
const Catagory = () => {
    const [elements, setElements] = useState([])
    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setElements(data))
    },[])
    return (
        <div className='catagory'>
            <div className='catagory-container'>
                {
                    elements.map(element => <ShowElement
                    key = {element.id}
                    element = {element}
                    ></ShowElement>)
                }
            </div>
            <div className='added-element-container'>
                this is added product part
            </div>
        </div>
    );
};

export default Catagory;