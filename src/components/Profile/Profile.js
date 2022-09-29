import React from 'react';
import profilepic from '../../image/profile.jpg'
import './Profile.css'
const Profile = () => {
    return (
        <div>
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
        </div>
    );
};

export default Profile;