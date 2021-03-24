import React from 'react';
import { useHistory } from "react-router-dom";
import './Footer.scss';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { Icon, FooterButton } from '../../data/LocalData';

const Footer = () => {

    const history = useHistory();

    const handleClick = (e) => {

        switch(e.target.value) {
            case 'Home' :
                history.push('/');
                break;
            case 'Rules':
                history.push('/settings');
                break;
            default:
        }
    }


    return (
        <div className='footer-container-mobile'> 
            {FooterButton.map((button, index) => 
                <input 
                    key={index} 
                    className='footer-button' 
                    type='button' value={button} 
                    onClick={(e) => handleClick(e)}
                />
            )}
            <BurgerMenu />
            <div className='footer-container-desktop'>
                <div className='footer-desktop-img'>
                    {Icon.map((icon, index) => 
                        <a 
                            target="_blank"
                            rel="noopener noreferrer"
                            href={icon.url}
                            key={index}
                        >
                            <img 
                                src={icon.src} 
                                alt={icon.name}
                            />
                        </a>
                    )}
                </div>
                <p>Copyright © 2021 - Thibault Verin - All Rights Reserve.</p>
            </div>
        </div>
    )
}

export default Footer;