import React, { useState } from 'react';
import MainButton from '../../Style/MainButton';
import './EndGameModal.scss'
import EndGameRanking from './EndGameRanking';

const EndGameModal = ({ score }) => {

    const [showRanking, setShowRanking] = useState(false);

    return (
        <div className='endgame-container'>
            {showRanking ? 
                <EndGameRanking />
                :
                <>
                    <h1>Game Finished</h1>
                    <div className='endgame-home-text'>
                        <p>Time : 02:25 </p>
                        <p>Score : {score} </p>
                        <p>Time bonus : 0</p>
                        <p>Total Score : {score}</p>
                    </div>
                    <div className='endgame-home-button'>
                        <MainButton 
                            type='button'
                            value='Next'
                            onClick={() => setShowRanking(true)}
                        />
                    </div>
                </>
            }
        </div>
    )
}

export default EndGameModal;