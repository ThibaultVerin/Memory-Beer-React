import React, { useState, useEffect } from 'react';
import './SingleBeerCards.scss';
import logo from '../../data/pictures/Logo.png';

const SingleBeerCards = ({ card, classname, handleClick }) => {

    const [match, setMatch] = useState(false);

    const [playerScore, setPlayerScore] = useState(0);


    // /*eslint-disable */
    // useEffect(() => {
    //     matchingResult();
    // }, [playerSecondChoice]);
    // /*eslint-enable */

    const handleClassName = () => {
     }



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
        <div className={classname} onClick={() => handleClick(card)}>
            <img src={card.src} alt={card.name} id={card.id} />
            <img src={logo} alt ='logo' />
        </div>
    )
}

export default SingleBeerCards;