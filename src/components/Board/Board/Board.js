import React, { useState, useEffect } from 'react';
import './Board.scss';
import { sortedBeerCards } from './ShuffleBoard';
import BeerCards from './BeerCards';
import EndGameModal from '../EndGame/EndGameModal';
import Score from '../Score/Score';
import Timer from '../Timer/Timer';

const Board = ({ user, multiPlayer }) => {

    const [gameFinished, setGameFinished] = useState(false);
    const [isPlayed, setIsPlayed] = useState(false);
    const [playerFirstChoice, setPlayerFirstChoice] = useState();
    const [pairCount, setPairCount] = useState(0);


    const [headerDisplay, setHeaderDisplay] = useState('score');


    const [lockBoard, setLockBoard] = useState(false);





    const [playerScore, setPlayerScore] = useState(0);

    const [pair, setPair] = useState(false);



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

    const handleheaderDisplay = () => {
        headerDisplay === 'time' ? setHeaderDisplay('score') : setHeaderDisplay('time')
        
    }

    return (
        <div className='board-container'>
            <div className='board-header'>
                <Score playerScore={playerScore} user={user} className={headerDisplay} />
                <Timer gameFinished={gameFinished} user={user} className={headerDisplay} />
                <input type='button' value={headerDisplay} onClick={() => handleheaderDisplay()} />
            </div>
            <div className={drunkMode ? 'board-card-container drunk' : 'board-card-container'}>
                {sortedBeerCards.map((card, index) => 
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
            {pairCount === (sortedBeerCards.length/2) && <EndGameModal score={playerScore} />}
            {/* {pairCount === 0 && <EndGameModal score={playerScore} />} */}
        </div>
    )
}

export default Board;