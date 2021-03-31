import React from 'react';
import './MainButton.scss';
import { useHistory } from "react-router-dom";

const MainButton = ({ type, value, link, handleClick }) => {

    const history = useHistory();

    const History = () => {
        history.push(link)
    }
    const handleEvent = (e) => {
        if (link) {
            History();
        } else if (handleClick) {
            handleClick();
        }
    }


    return (
        <>
            <input 
                className='main-button'
                type={type} 
                value={value}
                onClick={(e) => handleEvent(e)}
            />
        </>
    )
}

export default MainButton;