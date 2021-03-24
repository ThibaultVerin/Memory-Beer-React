import React, { useState, useEffect } from 'react';
import './SingleBeerCards.scss';
import logo from '../../data/pictures/Logo.png';

const SingleBeerCards = ({ card, handleClick }) => {

    const [match, setMatch] = useState(false);

    const [classname, setClassname] = useState('close');

    const [clicked, setClicked] = useState(false);

    /*eslint-disable */
    useEffect (() => {
        handleClassName();
    }, [clicked]);
    /*eslint-enable */

    const handleClassName = () => {
        if (clicked === true){
            setClassname('open');
        } else if(clicked === false) {
            setClassname('close');
        }
    }

    // /*eslint-disable */
    // useEffect(() => {
    //     matchingResult();
    // }, [playerSecondChoice]);
    // /*eslint-enable */

    // const matchingResult = () => {
    //     if (playerFirstChoice !== undefined && playerSecondChoice !== undefined) {
    //         if (playerFirstChoice === playerSecondChoice) {
    //             setMatch(!match);
    //             setPlayerScore(playerScore + 10);
    //         }
    //         setPlayerScore(playerScore - 10);
    //     }
    //     setMatch(!match);
    //     setPlayerFirstChoice();
    //     setPlayerSecondChoice();
    // }

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