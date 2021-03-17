import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import './BurgerMenu.scss';
import { NavLink } from '../../data/LocalData';

const BurgerMenu = () => {

    const history = useHistory();

    const [burgerOpen, setBurgerOpen] = useState(false);
    const [burgerClosing, setBurgerClosing] = useState(false);

    const handleClosing = () => {
        setBurgerClosing(!burgerClosing);
        setTimeout(() => {
            setBurgerOpen(!burgerOpen);
            setBurgerClosing(false);
          }, 1400);
    }

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
        handleClosing();
    } 

    const BurgerMenuOpen = () => {
        return (
            <div className={burgerClosing ? 'burger-menu-closing' : 'burger-menu-open'}>
                <div className='burger-cross' onClick={() => handleClosing()}/>
                <div className='burger-link'>
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

    return (
        <div className='burger-menu-container'>
            {burgerOpen ? BurgerMenuOpen() : 
                <div className='burger-menu' onClick={() => setBurgerOpen(!burgerOpen)}>
                    <div className='burger-line'/>
                    <div className='burger-line'/>
                    <div className='burger-line'/>
                </div>
            }
        </div>
    )
}

export default BurgerMenu;