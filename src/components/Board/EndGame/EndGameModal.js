import React, { useState, useContext, useEffect } from 'react';
import { UserContext }  from '../../../contexts/UserContext';
import MainButton from '../../Style/MainButton';
import './EndGameModal.scss'
import EndGameRanking from './EndGameRanking';

const EndGameModal = ({ score }) => {
    
    const { setUserInfo } = useContext(UserContext);

    const [showRanking, setShowRanking] = useState(false);

    useEffect(() => {
        setUserInfo(userInfo => ({
            ...userInfo,
            score: score,
        }))
    }, [])

    const handleClick = () => {
        setShowRanking(true)
    }

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
                            handleClick={handleClick}
                        />
                    </div>
                </>
            }
        </div>
    )
}

export default EndGameModal;