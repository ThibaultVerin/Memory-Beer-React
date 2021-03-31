import React from 'react';
import './EndGameRanking.scss';
import MainButton from '../../Style/MainButton';

const EndGameRanking = () => {


    return (
        <>
            <h1>Ranking</h1>
            <div className='endgame-ranking'>RANKING</div>
            <div className='endgame-ranking-text'>
                <p>Try to beat your score to climb on top of the rank and be number 1 ...</p>
                <p>or challenge yourself with hardcore difficulties !!!</p>
            </div>
            <div className='endgame-ranking-button'>
                <MainButton 
                    type='button'
                    value='Restart'
                    link='/single-player' 
                />
                <MainButton 
                    type='button'
                    value='Ranking'
                    link='/ranking'
                />
            </div>
        </>
    )
}

export default EndGameRanking;