import React from 'react';
import BreakTime from '../BreakTime/BreakTime';
import Profile from '../Profile/Profile';
import './AddedElement.css'

const AddedElement = ({time}) => {
    return (
        <div className='added-element-part'>
            <Profile></Profile>      
            <BreakTime></BreakTime>
            <section className='exercise-section'>
                <h3>Exercise Details</h3>
                <div className='time-count'>
                    <h4>Exersice Time</h4> 
                    <p> {time}s</p>
                </div>
                <div className='time-count'>
                    <h4>Break Time</h4>
                    <p>20s</p>
                </div>
                <button className='add-btn'>Activity Completed</button>
            </section>
        </div>
    );
};

export default AddedElement;