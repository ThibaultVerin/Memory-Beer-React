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

    const [playerChoice, setPlayerChoice] = useState([]);

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
        if (playerChoice.length === 0) {
            setPlayerChoice([card.id]);
            console.log(`FirstCard : ${card.id}`);
        } else {
            setPlayerChoice([...playerChoice, card.id]);
            console.log(`SecondCard : ${card.id}`);
        }
    }

    return (
        <div className='single-board-container'>
            {userInfo.name} : {playerScore}
            <div className='single-board-card-container'>
                {sortedBeerCards.map((card, index) => 
                    <SingleBeerCards key ={index} card={card} handleClick={handleClick} />
                )}
            </div>
        </div>
    )
}

export default SingleBoard;