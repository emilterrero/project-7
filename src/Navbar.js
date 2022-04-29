import './App.css';
import { useState, useEffect } from 'react';

function Navbar({ setNav, navOpen }) {

    const navClick = (e) => {
        console.log('hello')
        setNav(state => !state)
    }

    return (
        <div className='navbar'>
        <h2>Probability of Jobs to be Replaced by Automation</h2>
        <button 
        onClick={navClick}
        className='nav-btn'> 
        {navOpen ? 'Close' : 'Open'}
        </button>
        </div>

    )
}

export default Navbar;
