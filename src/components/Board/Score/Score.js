import React from 'react';
import './Score.scss';

const Score = ({ playerScore, user }) => {

    return (
        <div className='score-container'>
            <h1>{user.name} : {playerScore}</h1>
        </div>
    )
}

export default Score;