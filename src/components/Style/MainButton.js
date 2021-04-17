import React from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';

const Button = styled.input`
@import url('https://fonts.googleapis.com/css2?family=Patrick+Hand+SC&display=swap');

    height: 60px;
    width: 100px;
    background-color: #292929;
    color: #ffffd4;
    font-weight: bolder;
    font-family: 'Patrick Hand SC';
    font-size: 25px;
    border: solid 2px;
    border-radius: 25px;
    box-shadow: 0 5px rgba(0, 0, 0, 0.2);
    outline: none;
    cursor: pointer;
    padding: 0;
    &:hover {
        transition-duration: 0.2s;
        transform: scale(1.1);
    }
    &:active {
    box-shadow: 0 5px rgba(0, 0, 0, 0.2);
        transform: translateY(4px);
    }
    
    @media screen and (min-width: 532px) {
        height: 65px;
        width: 110px;
    }

    @media screen and (min-width: 768px) {
        height: 70px;
        width: 125px;
    }
`

const MainButton = ({ type, value, link, handleClick }) => {

    const history = useHistory();

    const History = () => {
        history.push(link)
    }
    const handleEvent = (e) => {
        if (link) {
            History();
        } else if (handleClick) {
            handleClick(e);
        }
    }


    return (
        <Button 
            className='main-button'
            type={type} 
            value={value}
            onClick={(e) => handleEvent(e)}
        />
    )
}

export default MainButton;