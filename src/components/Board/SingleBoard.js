import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import './SingleBoard.scss';
import { UserContext }  from '../../contexts/UserContext';
import { BeerCards } from '../../data/LocalData';
import SingleBeerCards from './SingleBeerCards';


const SingleBoard = () => {

    const history = useHistory();

    const { userInfo } = useContext(UserContext);

    const [sortedBeerCards, setSortedBeerCards] = useState([]);
    const [playerScore, setPlayerScore] = useState(0);

    const [playerFirstChoice, setPlayerFirstChoice] = useState();

    const [pair, setPair] = useState(false);

    /*eslint-disable */
    useEffect(() => {
        SortedCards();
    }, []);
    /*eslint-enable */


    const SortedCards = () => {
        const numberBottle = BeerCards.length;
        const newBeerCards = BeerCards;

        for (let i=0; i<numberBottle; i++) {
            newBeerCards.push({
                id: i,
                name: BeerCards[i].name,
                src: BeerCards[i].src
            });
        }
        setSortedBeerCards(newBeerCards);
        shuffleArray(newBeerCards);
     }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const handleClick = (card) => {
        console.log(card.id);
        if (!playerFirstChoice) {
            setPlayerFirstChoice(card.id);
            console.log(`FirstCard : ${card.id}`);
        } else {
            console.log(`SecondCard : ${card.id}`);
            matchingResult(card);
        }
    }

    const matchingResult = (card) => {      
        if (playerFirstChoice !== card.id) {
            setPlayerScore(playerScore - 10);

        } else {
            setPlayerScore(playerScore + 10);
            setPair(true);
        }
        setPlayerFirstChoice();
    }

    return (
        <div className='single-board-container'>
            {userInfo.name} : {playerScore}
            <div className='single-board-card-container'>
                {sortedBeerCards.map((card, index) => 
                    <SingleBeerCards key ={index} card={card} pair={pair} handleClick={handleClick} />
                )}
            </div>
        </div>
    )
}

export default SingleBoard;