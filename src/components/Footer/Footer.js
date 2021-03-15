import React from 'react';
import { useHistory } from "react-router-dom";
import './Footer.scss';
import BurgerMenu from '../Footer/BurgerMenu';

const Footer = () => {

    const history = useHistory();

    const button = ['Home', 'Beer']

    const handleClick = (e) => {

        switch(e.target.value) {
            case 'Home' :
                history.push('/');
                break;
            case 'Multi-Player':
                history.push('/');
                break;
            case 'Tutorial':
                history.push('/');
                break;
            default:
        }
    }


    return (
        <div className='footer-container'> 
            {button.map((button) => 
                <input key={button} type='button' value={button} onClick={(e) => handleClick(e)} />
            )}
            <div className='burger-menu'>
                <BurgerMenu />
            </div>
        </div>
    )
}

export default Footer;