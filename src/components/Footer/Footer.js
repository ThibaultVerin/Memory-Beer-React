import React from 'react';
import { useHistory } from "react-router-dom";
import './Footer.scss';
import BurgerMenu from '../Footer/BurgerMenu';
import linkedin from '../../data/pictures/linkedin.png';
import github from '../../data/pictures/github.png';

const Footer = () => {

    const history = useHistory();

    const button = ['Home', 'Beer'];
    const icon = [{
        name: 'github',
        src: github,
        url:'https://github.com/ThibaultVerin'
     },
     {
        name: 'linkedin',
        src: linkedin,
        url:'https://www.linkedin.com/in/thibaultverin/'
     }];

    const handleClick = (e) => {

        switch(e.target.value) {
            case 'Home' :
                history.push('/');
                break;
            case 'Beer':
                history.push('/');
                break;
            default:
        }
    }

    console.log(icon[0])

    return (
        <div className='footer-container-mobile'> 
            {button.map((button) => 
                <input key={button} className='footer-button' type='button' value={button} onClick={(e) => handleClick(e)} />
            )}
            <BurgerMenu />
            <div className='footer-container-desktop'>
                <div className='footer-desktop-img'>
                    {icon.map((icon) => 
                        <a 
                            target="_blank"
                            rel="noopener noreferrer"
                            href={icon.url}
                        >
                            <img src={icon.src} alt={icon.name}/>
                        </a>
                    )}
                </div>
                <p>Copyright © 2021 - Thibault Verin - All Rights Reserve.</p>
            </div>
        </div>
    )
}

export default Footer;