import React from 'react';
import './ShowElement.css'
const ShowElement = ({element, addToList}) => {
    const {name, age, picture,about, time, id} = element

    return (
        <div className='element'>
                <img className='display-img' src={picture} alt="" />
                <h2 className='element-name'>{name}</h2>
                <p>{about.slice(0,60)}</p>
                <p><strong>For age: </strong> {age}</p>
                <p><strong>Time required: </strong>{time}s </p>
                <button onClick={() => addToList(time)} className='add-btn'>Add To List</button>
        </div>
    );
};

export default ShowElement;