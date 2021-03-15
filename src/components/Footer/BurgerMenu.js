import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import './BurgerMenu.scss';

const BurgerMenu = () => {

    const history = useHistory();

    const [burgerOpen, setBurgerOpen] = useState(false);

    const burgerLink = ['Home', 'Ranking', 'About', 'Settings'];

    const handleClick = () => {
        setBurgerOpen(!burgerOpen);
        console.log('breh');
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
        handleClick();
    } 

    const BurgerMenuOpen = () => {
        return (
            <div className='burger-menu-open'>
                <div className='burger-cross' onClick={() => handleClick()}/>
                <div className='burger-link'>
                    {burgerLink.map((link) => 
                        <input type='button' value={link} onClick={(e) => handleLink(e)}/>
                    )}
                </div>
            </div>
        )
    }

    return (
        <div>
            {burgerOpen ? <div>{BurgerMenuOpen()}</div> : 
                <div className='burger-menu' onClick={() => handleClick()}>
                    <div className='burger-line'/>
                    <div className='burger-line'/>
                    <div className='burger-line'/>
                </div>
            }
        </div>
    )
}

export default BurgerMenu;