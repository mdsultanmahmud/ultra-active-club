import React, { useEffect, useState } from 'react';
import AddedElement from '../AddedElement/AddedElement';
import ShowElement from '../ShowElement/ShowElement';
import './Catagory.css'
const Catagory = () => {
    const storedBreaktime = localStorage.getItem('breakTime')
    const [elements, setElements] = useState([])
    const [newTime, setNewTime] = useState(0)
    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setElements(data))
    },[])
    const addToList = (time) =>{
        let addedTime = newTime + time
        setNewTime(addedTime)
    }
    return (
        <div className='catagory'>
            <div className='catagory-container'>
                {
                    elements.map(element => <ShowElement
                    key = {element.id}
                    element = {element}
                    addToList = {addToList}
                    ></ShowElement>)
                }
            </div>
            <div className='added-element-container'>
                <AddedElement
                    time = {newTime}
                    storedBreaktime = {storedBreaktime}
                ></AddedElement>
            </div>
        </div>
    );
};

export default Catagory;