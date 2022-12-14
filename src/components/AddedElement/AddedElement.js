import React, { useState } from 'react';
import BreakTime from '../BreakTime/BreakTime';
import Profile from '../Profile/Profile';
import './AddedElement.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddedElement = (props) => {
    const {time, storedBreaktime} = props

    const [breakTime, setBreakTime] = useState(storedBreaktime)
    const addBreakTime = (breakTime) => {
        localStorage.setItem('breakTime', breakTime)
        setBreakTime(breakTime)
    }

    const notify = () => toast("Wow, your exercise is done!");
    return (
        <div className='added-element-part'>
            <Profile></Profile>
            <BreakTime
                addBreakTime={addBreakTime}
            ></BreakTime>
            <section className='exercise-section'>
                <h3>Exercise Details</h3>
                <div className='time-count'>
                    <h4>Exersice Time</h4>
                    <p> {time}s</p>
                </div>
                <div className='time-count'>
                    <h4>Break Time</h4>
                    <p>{breakTime}s</p>
                </div>
                <button onClick={notify}  className='add-btn'>Activity Completed</button>
                <ToastContainer />
            </section>
            <div>
        
      </div>
        </div>
    );
};

export default AddedElement;