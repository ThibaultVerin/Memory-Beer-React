import React from 'react';
import { useHistory } from "react-router-dom";
import './EndGameRanking.scss';

const EndGameRanking = () => {

    const history = useHistory();

    return (
        <>
            <h1>Ranking</h1>
            <div className='endgame-ranking'>RANKING</div>
            <div className='endgame-ranking-text'>
                <p>Try to beat your score to climb on top of the rank and be number 1 ...</p>
                <p>or challenge yourself with hardcore difficulties !!!</p>
            </div>
            <div className='endgame-ranking-button'>
                <button 
                    type='button' 
                    onClick={() => history.push('/single-player')}
                >
                    Restart
                </button>
                <button 
                    type='button' 
                    onClick={() => history.push('/ranking')}
                >
                    Ranking
                </button>
            </div>
        </>
    )
}

export default EndGameRanking;