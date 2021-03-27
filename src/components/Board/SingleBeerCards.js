import React, { useState, useEffect } from 'react';
import './SingleBeerCards.scss';
import logo from '../../data/pictures/Logo.png';

const SingleBeerCards = ({ card, handleClick }) => {

    const [classname, setClassname] = useState('open');

    const [clicked, setClicked] = useState(false);

    /*eslint-disable */
    useEffect (() => {
        handleClassName();
    }, [clicked]);
    /*eslint-enable */

    const handleClassName = () => {
        if (clicked){
            setClassname('open');
        } else {
            setClassname('open');
        }
    }


    return (
        <div 
            className={`single-board-card-${classname}`} 
            onClick={() => {setClicked(!clicked); handleClick(card);}}
        >
            <img src={card.src} alt={card.name} id={card.id} />
            <img src={logo} alt ='logo' />
        </div>
    )
}

export default SingleBeerCards;