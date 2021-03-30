import React from 'react';
import './MainButton.scss';
import { useHistory } from "react-router-dom";

const MainButton = ({ type, value, link}) => {

    const history = useHistory();

    const History = () => {
        history.push(link)
    }
    const handleClick = () => {
        if (link) {
            console.log(link)
            History();
        }
    }


    return (
        <>
            <input 
                className='main-button'
                type={type} 
                value={value}
                onClick={handleClick}
            />
        </>
    )
}

export default MainButton;