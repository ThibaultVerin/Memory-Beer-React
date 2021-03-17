import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import './SingleBoard.scss';
import { UserContext }  from '../../contexts/UserContext';
import { BeerCards } from '../../data/LocalData';

const SingleBoard = () => {

    const history = useHistory();

    const { userInfo } = useContext(UserContext);

    const [playerScore, setPlayerScore] = useState(0);
    const [playerFirstChoice, setPlayerFirstChoice] = useState();
    const [playerSecondChoice, setPlayerSecondChoice] = useState();
    const [sortedBeerCards, setSortedBeerCards] = useState([]);
    const [match, setMatch] = useState(false);

    useEffect(() => {
        SortedCards();
    }, [])


    const SortedCards = () => {
        const numberBottle = BeerCards.length;
        const newBeerCards = BeerCards;

        for (let i=0; i<numberBottle; i++) {
            newBeerCards.push(BeerCards[i]);
        }
        setSortedBeerCards(newBeerCards); 
     }

     console.log(playerFirstChoice);
     console.log(playerSecondChoice);

    const handleClick = (card) => {
        if (!playerFirstChoice) {
            setPlayerFirstChoice(card.id);
        } else {
            setPlayerSecondChoice(card.id);
            matchingResult();
        }
    }

    const matchingResult = () => {
        if (playerFirstChoice === playerSecondChoice) {
            setMatch(true);


            console.log('miaou');
        } else {
            console.log('breh')
        }
        handleScore()
    }

    const handleScore = () => {
        if (match) {
            setPlayerScore(playerScore + 10);
        } else {
            setPlayerScore(playerScore + 10);
        }
        setPlayerFirstChoice();
        setPlayerSecondChoice();
        setMatch(!match);
    }

    return (
        <div className='single-board-container'>
            {userInfo.name} : {playerScore}
            <div className='single-board-card-container'>
                {sortedBeerCards.map((card, index) => 
                    <div className='single-board-card' key ={index}>
                        <img src={card.src} alt={card.name} id={card.id} onClick={() => handleClick(card)}/>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SingleBoard;