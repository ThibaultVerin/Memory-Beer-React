import React from 'react';
import styled from 'styled-components'

const MainInput = styled.input`
@import url('https://fonts.googleapis.com/css2?family=Patrick+Hand+SC&display=swap');

    width: 190px;
    height: 95px;
    margin: auto;
    margin-bottom: 10px;
    background-color: #6e0b14;
    color: #ffffd4;
    font-size: 30px;
    font-family: 'Patrick Hand SC';
    font-weight: bold;
    border: solid;
    border-radius: 15px;
    box-shadow: 10px 10px 5px 1px rgba(0, 0, 0, 0.2);
        &:hover {
            transition-duration: 0.3s;
            transform: scale(1.1);
        }
        &:active {
            box-shadow: 0 5px rgba(0, 0, 0, 0.2);
            transform: translateY(4px);
        }

    @media screen and (min-width: 532px) {
        width: 230px;
        height: 110px;
        font-size: 32px;
    }
`

const HomeInput = ({ value, handleClick }) => {

    return (
        <MainInput 
            type='button'
            value={value}
            onClick={(e) => handleClick(e)}
        />
    )
}

export default HomeInput;