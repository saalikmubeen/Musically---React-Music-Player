import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from '../contexts/AppContext';

const NavBar = () => {
    const { isVisible, setIsVisible } = useContext(AppContext);
    return (
        <nav className="navbar">
            <h1>Waves</h1>
            <button onClick={() => setIsVisible(!isVisible)}>
                Library
                <FontAwesomeIcon icon={ faMusic } />
            </button>
        </nav>
    )
}


export default NavBar;