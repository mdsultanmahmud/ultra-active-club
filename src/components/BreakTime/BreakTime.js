import React from 'react';
import './BreakTime.css'
const BreakTime = ({addBreakTime}) => {
    return (
        <div>
             <section className="break-time-section">
                <h3>Add a break</h3>
                <div className='break-time'>
                    <p onClick={() =>{addBreakTime(10)}} >10s</p>
                    <p onClick={() =>{addBreakTime(20)}} >20s</p>
                    <p onClick={() =>{addBreakTime(30)}} >30s</p>
                    <p onClick={() =>{addBreakTime(40)}} >40s</p>
                </div>
            </section>
        </div>
    );
};

export default BreakTime;
























