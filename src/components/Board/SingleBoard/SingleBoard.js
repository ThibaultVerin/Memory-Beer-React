import React, { useState, useEffect } from 'react';
import './SingleBoard.scss';
import { sortedBeerCards } from './ShuffleBoard';
import SingleBeerCards from './SingleBeerCards';
import EndGameModal from '../EndGame/EndGameModal';
import Score from '../Score/Score';
import Timer from '../Timer/Timer';

const SingleBoard = ({ user, multiPlayer }) => {

    const [playerScore, setPlayerScore] = useState(0);
    const [playerFirstChoice, setPlayerFirstChoice] = useState();
    const [pair, setPair] = useState(false);
    const [isPlayed, setIsPlayed] = useState(false);
    const [lockBoard, setLockBoard] = useState(false);
    const [pairCount, setPairCount] = useState(0);

    const [gameFinished, setGameFinished] = useState(false);

    const [switchScore, setSwitchScore] = useState(false);


    const drunkMode = false;

    useEffect(() => {
        if(pairCount === (sortedBeerCards.length/2)) {
            setGameFinished(false)
        }
        if (!isPlayed) {
            setTimeout(() => {
                setLockBoard(false); 
            }, 2000);
        }
    }, [isPlayed])

    useEffect(() => {
        if (!playerFirstChoice) {
            setPair(false);
            setIsPlayed(false);
        }
    }, [playerFirstChoice])

    const handleClick = (card) => {
        if (!playerFirstChoice) {
            setPlayerFirstChoice(card.id);
            if (!gameFinished) {
                setGameFinished(true);
            } 
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
            setLockBoard(false);
        }
        setPlayerFirstChoice();
    }

    return (
        <div className='single-board-container'>
        {switchScore ? <Score playerScore={playerScore} user={user} /> : <Timer gameFinished={gameFinished} user={user} />}
            <button type='button' onClick={() => setSwitchScore(!switchScore)}></button>
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
            {pairCount === (sortedBeerCards.length/2) && <EndGameModal score={playerScore} />}
            {/* {pairCount === 0 && <EndGameModal score={playerScore} />} */}
        </div>
    )
}

export default SingleBoard;