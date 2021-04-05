import React, { useState, useEffect } from 'react';
import './Board.scss';
import ShuffleArray, { sortedBeerCards } from './ShuffleBoard';
import BeerCards from './BeerCards';
import EndGameModal from '../EndGame/EndGameModal';
import BoardHeader from './BoardHeader';

const Board = ({ user, multiPlayer, drunkMode }) => {


    useEffect(() => {
        ShuffleArray(sortedBeerCards);
    }, []);

    const [gameFinished, setGameFinished] = useState(false);
    const [isPlayed, setIsPlayed] = useState(false);
    const [playerFirstChoice, setPlayerFirstChoice] = useState();
    const [pairCount, setPairCount] = useState(0);
    const [lockBoard, setLockBoard] = useState(false);
    const [playerScore, setPlayerScore] = useState(0);
    const [pair, setPair] = useState(false);

    useEffect(() => {
        if(pairCount === ( sortedBeerCards.length/2)) {
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
            setLockBoard(true);
        }
    }

    const matchingResult = (card) => {
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
        <>
            <BoardHeader 
                user={user} 
                gameFinished={gameFinished} 
                playerScore={playerScore} 
            />
            <div className={drunkMode ? 'board-card-container drunk' : 'board-card-container'}>
                { sortedBeerCards.map((card, index) => 
                    <BeerCards 
                        key ={index} 
                        card={card} 
                        pair={pair} 
                        isPlayed={isPlayed}
                        lockBoard={lockBoard} 
                        handleClick={handleClick} 
                    />
                )}
            </div>
            {pairCount === ( sortedBeerCards.length/2) && <EndGameModal score={playerScore} />}
            {/* {pairCount === 0 && <EndGameModal score={playerScore} />} */}
        </>
    )
}

export default Board;