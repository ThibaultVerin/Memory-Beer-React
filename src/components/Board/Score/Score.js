import React from 'react';
import './Score.scss';

const Score = ({ playerScore, user, className }) => {

    return (
        <div className={`score-container-${className}`}>
            <h1> {user.name}: {playerScore}</h1>
        </div>
    )
}

export default Score;