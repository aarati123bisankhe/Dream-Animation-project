import React, { useState } from 'react';
import './navbar.css'; // Make sure the CSS file path is correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [isDropdownActive, setDropdownActive] = useState(false);

    const toggleDropdown = () => {
        setDropdownActive(!isDropdownActive);
    };

    return (
        <div className="navbar">
               <div className="search-container">
                <form>
                    <input type="search" placeholder="Search here ..." />
                    <FontAwesomeIcon icon={faSearch} className="fa" /> {/* Use FontAwesomeIcon for search */}
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
                        {/* <a href="#">Setting & Privacy</a> */}
                        <a href="#">Logout</a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
