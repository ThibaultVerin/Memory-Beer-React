import React from 'react';
import { useHistory } from "react-router-dom";
import './Navbar.scss';
import logo from '../../data/pictures/Logo.png';
import { NavLink } from '../../data/LocalData';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const Navbar = () => {

    const history = useHistory();

    const handleLink = (e) => {
        
        switch(e.target.value) {
            case 'Home' :
                history.push('/');
                break;
            case 'Ranking':
                history.push('/ranking');
                break;
            case 'About':
                history.push('/about');
                break;
            case 'Settings':
                history.push('/settings');
            break;
            default:
        }
    } 

    return (
        <div className='navbar-body'>
            <img src={logo} alt='logo'/>
            <div className='navbar-title'>
                <h1>Memory Beer</h1>
            </div>
            <div className='navbar-burger'>
                <BurgerMenu />
            </div>
            <div className='navbar-links'>
                {NavLink.map((link) =>
                    <input 
                        type='button' 
                        value={link} 
                        onClick={(e) => handleLink(e)}
                    />
                )}
            </div>
        </div>
    )
}

export default Navbar;