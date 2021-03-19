import React, { useState, useEffect } from 'react';
import './SingleBeerCards.scss';
import logo from '../../data/pictures/Logo.png';

const SingleBeerCards = ({ card, index }) => {

    // console.log(card.id)

    // console.log(card.id - 1 )
    // console.log(index)
    const [cardOpen, setCardOpen] = useState(false);
    const [playerFirstChoice, setPlayerFirstChoice] = useState();
    const [playerSecondChoice, setPlayerSecondChoice] = useState();
    const [match, setMatch] = useState(false);

    const [playerScore, setPlayerScore] = useState(0);


    useEffect(() => {
        matchingResult();
    }, [playerSecondChoice]);

    const handleClassName = () => {
     }

     const handleClick = (card) => {
        setCardOpen(!cardOpen);
        if (!playerFirstChoice) {
            setPlayerFirstChoice(card.id);
        } else {
            setPlayerSecondChoice(card.id);
        }
    }

    const matchingResult = () => {
        if (playerFirstChoice !== undefined && playerSecondChoice !== undefined) {
            if (playerFirstChoice === playerSecondChoice) {
                setMatch(!match);
                setPlayerScore(playerScore + 10);
            }
            setPlayerScore(playerScore - 10);
        }
        setMatch(!match);
        setPlayerFirstChoice();
        setPlayerSecondChoice();
    }

    return (
        <div className='single-board-card-open' onClick={() => handleClick(card)}>
            <img src={card.src} alt={card.name} id={card.id} />
            <img src={logo} alt ='logo' />
        </div>
    )
}

export default SingleBeerCards;