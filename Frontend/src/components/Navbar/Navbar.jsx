import React, { useState } from 'react';
import './navbar.css'; // Ensure correct path
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/images/log.png'; // Import the image correctly

const Navbar = () => {
    const [isDropdownActive, setDropdownActive] = useState(false);

    const toggleDropdown = () => {
        setDropdownActive(!isDropdownActive);
    };

    return (
        <div className="navbar">
            <div className='logo'>
                <img src={logo} alt="logo" /> {/* Corrected tag */}
            </div>
            
            <div className="search-container">
                <form>
                    <input type="search" placeholder="Search here ..." />
                    <FontAwesomeIcon icon={faSearch} className="fa" />
                </form>
            </div>

            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Movie</a></li>
                <li><a href="#">About</a></li>
            </ul>

            <div className={`profile-container ${isDropdownActive ? 'active' : ''}`} 
                id="profileIcon" 
                onClick={toggleDropdown}
            >
                <FontAwesomeIcon icon={faUser} />
                
                {/* Dropdown Menu */}
                {isDropdownActive && (
                    <div id="profileDropdown" className="dropdown">
                        <a href="#">Logout</a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
