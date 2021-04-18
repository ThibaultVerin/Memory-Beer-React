import React, { useState, useContext, useEffect } from 'react';
import { UserContext }  from '../../../contexts/UserContext';
import MainButton from '../../Style/MainButton';
import './EndGameModal.scss'
import EndGameRanking from './EndGameRanking';
import { TimeContext }  from '../../../contexts/TimeContext';

const EndGameModal = ({ score }) => {
    
    const { setUserInfo } = useContext(UserContext);
    const { gameTime } = useContext(TimeContext);

    const [showRanking, setShowRanking] = useState(false);

    /*eslint-disable */
    useEffect(() => {
        console.log(gameTime)
        setUserInfo(userInfo => ({
            ...userInfo,
            score: score,
            time: gameTime,
        }))
    }, [])
    /*eslint-enable */

    console.log(gameTime)
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
                        <p>Time : {gameTime.minute} : {gameTime.second}</p>
                        <p>Score : {score}</p>
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