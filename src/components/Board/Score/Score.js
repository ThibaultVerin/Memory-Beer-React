import React from 'react';
import './Score.scss';

const Score = ({ user, className, playerScore }) => {


    return (
        <div className={`score-container-${className}`}>
            <h1> {user.name} :</h1>
            <h1> {playerScore}</h1>
        </div>
    )
}

export default Score;