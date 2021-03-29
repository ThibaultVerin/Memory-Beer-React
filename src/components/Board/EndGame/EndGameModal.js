import React, { useState } from 'react';
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
                    <div className='endgame-text'>
                        <h1>Game Finished</h1>
                        <p>Time : 02:25 </p>
                        <p>Score : {score} </p>
                        <p>Time bonus : 0</p>
                        <p>Total Score :</p>
                    </div>
                    <div className='singlePlayer-button'>
                        <button 
                            type='button' 
                            onClick={() => setShowRanking(true)}
                        >
                            Next
                        </button>
                    </div>
                </>
            }
        </div>
    )
}

export default EndGameModal;