import React from 'react';
import { useHistory } from "react-router-dom";

const EndGameRanking = () => {

    const history = useHistory();

    return (
    <div className='endgame-ranking'>
        <h1>Ranking</h1>
        <p>Try to beat your score to climb on top of the rank and be number 1</p>
        <p>or challenge yourself with hardcore difficulties</p>
        <div className='singlePlayer-button'>
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
                Full Ranking
            </button>
        </div>
    </div>
    )
}

export default EndGameRanking;