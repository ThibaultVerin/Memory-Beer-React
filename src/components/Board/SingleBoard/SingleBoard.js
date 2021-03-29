import React, { useContext, useState, useEffect } from 'react';
// import { useHistory } from "react-router-dom";
import './SingleBoard.scss';
import { UserContext }  from '../../../contexts/UserContext';
import { sortedBeerCards } from './ShuffleBoard';
import SingleBeerCards from './SingleBeerCards';
import EndGameModal from '../EndGameModal';


const SingleBoard = () => {

    // const history = useHistory();

    const { userInfo } = useContext(UserContext);

    const [playerScore, setPlayerScore] = useState(0);
    const [playerFirstChoice, setPlayerFirstChoice] = useState();
    const [pair, setPair] = useState(false);
    const [isPlayed, setIsPlayed] = useState(false);
    const [lockBoard, setLockBoard] = useState(false);
    const [pairCount, setPairCount] = useState(0);

    /*eslint-disable */
    useEffect(() => {
    }, [playerScore]);
    /*eslint-enable */


    const handleClick = (card) => {
        if (!playerFirstChoice) {
            setPlayerFirstChoice(card.id);
        } else {
            matchingResult(card);
        }
    }

    const matchingResult = (card) => {
        setLockBoard(true);
        setIsPlayed(true);
        if (playerFirstChoice !== card.id) {
            if (playerScore === 0) {
                setPlayerScore(0);
            } else {
                setPlayerScore(playerScore - 20);
            }
        } else {
            setPlayerScore(playerScore + 100);
            setPair(true);
            setPairCount(pairCount + 1);
        }
        setPlayerFirstChoice();
        setTimeout(() => {
            setPair(false);
            setIsPlayed(false);
            setLockBoard(false);
        }, 1500);
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
                {/* {pairCount === (sortedBeerCards.length/2) && <EndGameModal />} */}
                {pairCount === 0 && <EndGameModal />}
            </div>
        </div>
    )
}

export default SingleBoard;