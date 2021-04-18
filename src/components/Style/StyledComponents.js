import styled from 'styled-components';

// ---- Navbar
export const NavbarContainer = styled.div`
    height: 13vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #24445c;
    color: #ffffd4;
    font-family: 'Patrick Hand SC';
`

export const NavbarLogo = styled.img`
    width: 65px;
    position: absolute;
    top: 12px;
    left: 15px;
    cursor: pointer;
`

export const NavbarTitleContainer = styled.div`
    width: 100%;
    text-align: center;
    padding-left: 25px;

    @media screen and (min-width: 1024px) {
        width: 33%;
    }
`
export const NavbarTitle = styled.h1`
    width: 70%;
    font-size: 45px;
    margin-left: 15%;
    cursor:pointer;
    &:hover {
        transition-duration: 0.3s;
        transform: scale(1.1);
    }

    @media screen and (min-width: 768px) {
        display: block;
        padding-left: 35px
    }


    @media screen and (min-width: 1024px) {
        font-size: 50px;
    }
`

export const NavbarBurgerContainer = styled.div`
    display: none;

    @media screen and (min-width: 768px) {
        display: block;
        padding-right: 30px;
    }

    @media screen and (min-width: 1024px) {
        display: none;
    }
`

export const NavbarLinksContainer = styled.div`
    display: none;

    @media screen and (min-width: 1024px) {
        display: flex;
        justify-content: flex-start;
    }
`

export const NavbarLinks = styled.input`
    @media screen and (min-width: 1024px) {
        color: #ffffd4;
        font-family: 'Patrick Hand SC';
        font-size: 35px;
        font-weight: bolder;
        background: transparent;
        border: none;
        margin: 0 30px;
        padding: 0;
        outline: none;
        cursor: pointer;
        &:hover {
            transition-duration: 0.4s;
            transform: scale(1.3);
        }
        &:first-child {
            &:focus {
                border:none
            }
        }
        &:focus {
            border-bottom: 2px solid #ffffd4;
        }
    }
`


// ---- Footer

export const FooterContainer = styled.div`
    height: 10vh;
    display: flex;
    background-color: #292929;
    box-shadow: -60px -3px #24445c;
    border-top-left-radius: 10px;
`

export const FooterMobile = styled.input`
    background-color: $fourth-color;
    color:$third-color;
    font-family: $primary-font-family;
    font-size: 26px;
    font-weight: bolder;
    border: outset 5px rgba(255, 255, 255, 0.11);
    border-top-left-radius: 10px;
`


// ---- Burger Menu

export const BurgerMenuContainer = styled.div`
    width: 50%;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 3px 0 #24445c;
`

export const BurgerLine = styled.div`
    width: 45px;
    height: 4px;
    background-color: #ffffd4;
    border-radius: 10px;
    margin: 4px 0;
`


// ---- Home Component
export const HomeContainer = styled.div`
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-bottom: 13px;
    @media screen and (min-width: 532px) {
        height: 85%;
    }
`


// ---- Player Info Component
export const PlayerInfoContainer = styled.div`
    width: 80%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #6e0b14;
    font-weight: bolder;
    border: solid;
    border-radius: 15px;
    box-shadow: 10px 10px 5px 1px rgba(0, 0, 0, 0.2);
    padding: 20px 0;
    margin-bottom: 25px;

    @media screen and (min-width: 768px) {
        width: 625px;
    }
`

export const PlayerInfoMode = styled.h2`
    font-size: 23px;
    margin: 0 0 10px;
`



// ---- Player Number Component
export const PlayerNumberContainer = styled.div`
    width: 80%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: #6e0b14;
    border: solid;
    border-radius: 15px;
    box-shadow: 10px 10px 5px 1px rgba(0, 0, 0, 0.2);
    padding: 20px 0;
    margin-bottom: 40px;

    @media screen and (min-width: 768px) {
        width: 625px;
        margin-bottom: 0;    
    }
`

export const PlayerNumberTitle = styled.h1`
    font-size: 23px;
    margin: 0 0 10px;
`

export const PlayerNumberSelect = styled.select`
    width: 80%;
    height: 20%;
    background-color: #292929;
    color: #ffffd4;
    font-family: 'Patrick Hand SC';
    font-size: 22px;
    border: solid 2px;
    border-radius: 20px;
    padding: 10px;
    margin-top: 20px;
    outline: none;
    box-shadow: 0 5px rgba(0, 0, 0, 0.2);
    cursor: pointer;

    @media screen and (min-width: 532px) {
        width: 350px;
        height: 22%;
    }
`

export const PlayerNumberButtonContainer = styled.div`
    width: 85%;
    display: flex;
    justify-content: space-around;
    margin-top: 10px;

    @media screen and (min-width: 532px) {
        width: 380px;
    }

`