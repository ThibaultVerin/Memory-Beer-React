import React from 'react';
import { useHistory } from "react-router-dom";
import logo from '../../data/pictures/Logo.png';
import { NavLink } from '../../data/LocalData';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { 
    NavbarContainer, 
    NavbarTitleContainer,
    NavbarTitle,
    NavbarLogo,
    NavbarBurgerContainer,
    NavbarLinksContainer,
    NavbarLinks
} from '../Style/StyledComponents';

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
        <NavbarContainer>
            <NavbarLogo src={logo} alt='logo' onClick={() => history.push('/')}/>
            <NavbarTitleContainer>
                <NavbarTitle onClick={() => history.push('/')}>Memory Beer</NavbarTitle>
            </NavbarTitleContainer>
            <NavbarBurgerContainer>
                <BurgerMenu />
            </NavbarBurgerContainer>
            <NavbarLinksContainer>
                {NavLink.map((link, index) =>
                    <NavbarLinks 
                        key={index}
                        type='button' 
                        value={link} 
                        onClick={(e) => handleLink(e)}
                    />
                )}
            </NavbarLinksContainer>
        </NavbarContainer>
    )
}

export default Navbar;