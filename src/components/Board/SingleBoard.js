import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import './SingleBoard.scss';
import { UserContext }  from '../../contexts/UserContext';
import { BeerCards } from '../../data/LocalData';

const SingleBoard = () => {

    const history = useHistory();

    const { userInfo } = useContext(UserContext);

    const [sortedBeerCards, setSortedBeerCards] = useState([]);
    const [playerScore, setPlayerScore] = useState(0);
    const [playerFirstChoice, setPlayerFirstChoice] = useState();
    const [playerSecondChoice, setPlayerSecondChoice] = useState();
    const [bothChoices, setBothChoices] = useState(false);
    const [match, setMatch] = useState(false);
    const [cardOpen, setCardOpen] = useState(false);

    useEffect(() => {
        SortedCards();
    }, []);

    useEffect(() => {
        matchingResult();
    }, [bothChoices]);

    // useEffect(() => {
    //     handleScore();
    // }, [match]);


    const SortedCards = () => {
        const numberBottle = BeerCards.length;
        const newBeerCards = BeerCards;

        for (let i=0; i<numberBottle; i++) {
            newBeerCards.push(BeerCards[i]);
        }
        setSortedBeerCards(newBeerCards); 
     }

    const handleClick = (card) => {
        setCardOpen(true);
        if (!playerFirstChoice) {
            setPlayerFirstChoice(card.id);
        } else {
            setPlayerSecondChoice(card.id);
            setBothChoices(!bothChoices);
        }
    }

    const matchingResult = () => {
        if (playerFirstChoice !== undefined && playerSecondChoice !== undefined) {
            if (playerFirstChoice === playerSecondChoice) {
                setMatch(true);
                setPlayerScore(playerScore + 10);
            } else {
                setPlayerScore(playerScore - 10);
            }
            setPlayerFirstChoice();
            setPlayerSecondChoice();
        }
        setMatch(false);
    }

    return (
        <div className='single-board-container'>
            {userInfo.name} : {playerScore}
            <div className='single-board-card-container'>
                {sortedBeerCards.map((card, index) => 
                    <div className='single-board-card-open' key ={index}>
                        <img src={card.src} alt={card.name} id={card.id} onClick={() => handleClick(card)}/>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SingleBoard;