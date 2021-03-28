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
    const [isPlayed, setIsPlayed] = useState(false);

    const [lockBoard, setLockBoard] = useState(false);

    /*eslint-disable */
    useEffect(() => {
        SortedCards();
    }, []);
    /*eslint-enable */

    /*eslint-disable */
    useEffect(() => {
        setIsPlayed(false);
        setPair(false);
        setPlayerFirstChoice();
        // setLockBoard(false);
    }, [playerScore]);
    /*eslint-enable */


    const SortedCards = () => {
        const numberBottle = BeerCards.length;
        const newBeerCards = BeerCards;

        for (let i=0; i<numberBottle; i++) {
            newBeerCards.push({
                id: i + 1,
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
        if (!playerFirstChoice) {
            setPlayerFirstChoice(card.id);
        } else {
            matchingResult(card);
        }
    }

    const matchingResult = (card) => {
        //setIsPlayed(true);
        if (playerFirstChoice !== card.id) {
            setPlayerScore(playerScore - 20); 
        } else {
            setPlayerScore(playerScore + 100);
            setPair(true);
        }
    }

    return (
        <div className='single-board-container'>
            {userInfo.name} : {playerScore}
            <div className='single-board-card-container'>
                {sortedBeerCards.map((card, index) => 
                    <SingleBeerCards 
                        key ={index} 
                        card={card} 
                        pair={pair} 
                        isPlayed={isPlayed}
                        lockBoard={lockBoard} 
                        handleClick={handleClick} 
                    />
                )}
            </div>
        </div>
    )
}

export default SingleBoard;