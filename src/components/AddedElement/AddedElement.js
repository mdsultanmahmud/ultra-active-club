import React from 'react';
import './AddedElement.css'
import profilepic from '../../image/profile.jpg'

const AddedElement = () => {
    return (
        <div className='added-element-part'>
            <section>
                <div className="profile">
                    <div>
                        <img src={profilepic} alt="" />
                    </div>
                    <div>
                        <h3 className='profile-name'>Sultan Mahmud</h3>
                        <p>Dhaka, Bangladesh</p>
                    </div>
                </div>
                <div className="profile-details">
                    <div>
                        <h3>50 <span>kg</span></h3>
                        <p>Weight</p>
                    </div>
                    <div>
                        <h3>5.5</h3>
                        <p>Height</p>
                    </div>
                    <div>
                        <h3>21 <span>yrs</span></h3>
                        <p>Age</p>
                    </div>
                </div>
            </section>

            <section className="break-time-section">
                <h3>Add a break</h3>
                <div className='break-time'>
                    <p>10s</p>
                    <p>20s</p>
                    <p>30s</p>
                    <p>40s</p>
                    <p>50s</p>
                </div>
            </section>
            <section className='exercise-section'>
                <h3>Exercise Details</h3>
                <div className='time-count'>
                    <h4>Exersice Time</h4>
                    <p>200s</p>
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