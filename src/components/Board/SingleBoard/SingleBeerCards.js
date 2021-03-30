import React, { useState, useEffect } from 'react';
import './SingleBeerCards.scss';
import logo from '../../../data/pictures/Logo.png';

const SingleBeerCards = ({ card, handleClick, pair, isPlayed, lockBoard }) => {

    const [classname, setClassname] = useState('single-board-card close');
    const [clicked, setClicked] = useState(false);
    const [match, setMatch] = useState(false);
    const [played, setPlayed] = useState(false);

    /*eslint-disable */
    useEffect (() => {
        if (isPlayed) {
            setPlayed(true);
            if (pair && clicked) {
                setMatch(true);
            }
        } else {
            setPlayed(false);
        }
        handleClassName();
    }, [isPlayed]);
    /*eslint-enable */

    /*eslint-disable */
    useEffect (() => {
        handleClassName();
    }, [clicked]);
    /*eslint-enable */

    const handleClassName = () => {
        if (clicked && played){
            setClassname('single-board-card open');
            setClicked(false);
        }
        else if (clicked || match){
            setClassname('single-board-card open');
        } else {
            setClassname('single-board-card close');
            setClicked(false);
        }
    }

    const Playing = () => {
        if (clicked === false && lockBoard === false) {
            handleClick(card);
            setClicked(!clicked);     
        }
    }


    return (
        <div 
            className={classname} 
            onClick={() => Playing()}
        >
            <img  src={card.src} alt={card.name} id={card.id} />
            <img  src={logo} alt ='logo' />
        </div>
    )
}

export default SingleBeerCards;