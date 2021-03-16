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
            case 'Beer':
                history.push('/');
                break;
            default:
        }
    }


    return (
        <div className='footer-container-mobile'> 
            {button.map((button) => 
                <input key={button} className='footer-button' type='button' value={button} onClick={(e) => handleClick(e)} />
            )}
            <BurgerMenu />
        </div>
    )
}

export default Footer;