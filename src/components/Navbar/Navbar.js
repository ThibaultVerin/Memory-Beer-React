import React from 'react';
import { useHistory } from "react-router-dom";
import './Navbar.scss';
import logo from '../../data/pictures/Logo.png';
import BurgerMenu from './BurgerMenu';

const Navbar = () => {

    const history = useHistory();

    return (
        <div className='navbar-body'>
                <img src={logo} alt='logo'/>
            <BurgerMenu />
        </div>
    )
}

export default Navbar;