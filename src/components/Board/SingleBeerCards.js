import React, { useState, useEffect } from 'react';
import './SingleBeerCards.scss';
import logo from '../../data/pictures/Logo.png';

const SingleBeerCards = ({ card, handleClick, pair }) => {

    const [classname, setClassname] = useState('close');

    const [clicked, setClicked] = useState(false);

    const [match, setMatch] = useState();

    /*eslint-disable */
    useEffect (() => {
       
    }, [clicked]);
    /*eslint-enable */

        /*eslint-disable */
        useEffect (() => {
            if(clicked) {
                handleClassName();
                console.log('breh')
            }
        }, [clicked]);
        /*eslint-enable */

    const handleClassName = () => {
        if (clicked){
            setClassname('open');
        } else {
            setClassname('close');
        }
        setTimeout(() => {
            setClassname('close');
            setClicked(!clicked);
        }, 10000);
    }

    const Test = () => {
        if (clicked === false) {
            handleClick(card);
            setClicked(!clicked);
            
        }
    }


    return (
        <div 
            className={`single-board-card-${classname}`} 
            onClick={() => Test()}
        >
            <img src={card.src} alt={card.name} id={card.id} />
            <img src={logo} alt ='logo' />
        </div>
    )
}

export default SingleBeerCards;