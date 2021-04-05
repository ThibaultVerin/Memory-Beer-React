import React, { useState, useEffect, useContext } from 'react';
import './Board.scss';
import ShuffleArray, { sortedBeerCards } from './ShuffleBoard';
import BeerCards from './BeerCards';
import EndGameModal from '../EndGame/EndGameModal';
import BoardHeader from './BoardHeader';
import { ActualPlayerContext }  from '../../../contexts/ActualPlayerContext';
import { NumberPlayerContext }  from '../../../contexts/NumberPlayerContext';

const Board = ({ user, multiplayer, drunkMode }) => {

    const { actualPlayer, setActualPlayer } = useContext(ActualPlayerContext);
    const { numberPlayer } = useContext(NumberPlayerContext);

    const [gameStarting, setGameStarting] = useState(false);
    const [playerFirstChoice, setPlayerFirstChoice] = useState();
    const [lockBoard, setLockBoard] = useState(false);


    const [isRoundFinished, setIsRoundFinished] = useState(false);
    const [pairCount, setPairCount] = useState(0);
    const [pair, setPair] = useState(false);

    const [playerScore, setPlayerScore] = useState(0);

    // Shuffle Array for every new board when the component is mounted.
    useEffect(() => {
        ShuffleArray(sortedBeerCards);
    }, []);

    // Each time the round is finished we check if the game if finished else we unlock the board.
    useEffect(() => {
        if(pairCount === ( sortedBeerCards.length/2)) {
            setTimeout(() => {
                setGameStarting(false); 
            }, 2000);
        }
        if (!isRoundFinished) {
            setTimeout(() => {
                setLockBoard(false); 
            }, 2000);
        }
    }, [isRoundFinished]);

    // Each time the player choice is set to null, reset the par and round states to start the new round.
    useEffect(() => {
            setPair(false);
            setIsRoundFinished(false);
    }, [!playerFirstChoice]);


    // useEffect(() => {
    //     if(lockBoard === true) {
    //         setIsRoundFinished(true);
    //     }
    // }, [lockBoard]);

    // if playerChoice doesn't exist, set card choice. Else call matching function and lock the board.
    const handleClick = (card) => {
        if (!playerFirstChoice) {
            setPlayerFirstChoice(card.id);
            if (!gameStarting) {
                setGameStarting(true);
            } 
        } else {
            matchingResult(card);
            setLockBoard(true);
        }
    }

    const matchingResult = (card) => {
        setIsRoundFinished(true);
        if (playerFirstChoice !== card.id) {
            if (multiplayer) {
                setTimeout(() => {
                    actualPlayer === numberPlayer ? setActualPlayer(1) : setActualPlayer(actualPlayer + 1);
                }, 2000);
            }
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
    }


    return (
        <>
            <BoardHeader 
                user={user} 
                gameStarting={gameStarting} 
                playerScore={playerScore} 
            />
            <div className={drunkMode ? 'board-card-container drunk' : 'board-card-container'}>
                { sortedBeerCards.map((card, index) => 
                    <BeerCards 
                        key ={index} 
                        card={card} 
                        pair={pair} 
                        isRoundFinished={isRoundFinished}
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