import React, { useContext } from 'react';
import { UserContext }  from '../../../contexts/UserContext';
import './Score.scss';

const Score = ({ playerScore }) => {

    const { userInfo } = useContext(UserContext);

    return (
        <div className='score-container'>
            <h1>{userInfo.name} : {playerScore}</h1>
        </div>
    )
}

export default Score;