import React, { useState } from 'react';
import './SingleBoard.scss';
import { sortedBeerCards } from './ShuffleBoard';
import SingleBeerCards from './SingleBeerCards';
import EndGameModal from '../EndGame/EndGameModal';
import Score from '../Score/Score';


const SingleBoard = () => {

    const [playerScore, setPlayerScore] = useState(0);
    const [playerFirstChoice, setPlayerFirstChoice] = useState();
    const [pair, setPair] = useState(false);
    const [isPlayed, setIsPlayed] = useState(false);
    const [lockBoard, setLockBoard] = useState(false);
    const [pairCount, setPairCount] = useState(0);


    const drunkMode = false;

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
        }, 1000);
    }

    return (
        <div className='single-board-container'>
        {pairCount !== (sortedBeerCards.length/2) && <Score playerScore={playerScore} />}
            <div className={drunkMode ? 'single-board-card-container drunk' : 'single-board-card-container'}>
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
            {/* {pairCount === (sortedBeerCards.length/2) && <EndGameModal score={playerScore} />} */}
            {pairCount === 0 && <EndGameModal score={playerScore} />}
        </div>
    )
}

export default SingleBoard;