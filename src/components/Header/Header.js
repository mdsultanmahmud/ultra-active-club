import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <div>
                <h3 className='brand-text'>Power <span className='brand-name-part'>Zone</span></h3>
            </div>
            <div className='link-item'>
                <li><a href="./">Home</a></li>
                <li><a href="./">Blog</a></li>
                <li><a href="./">About Me</a></li>               
            </div>
        </nav>
    );
};

export default Header;