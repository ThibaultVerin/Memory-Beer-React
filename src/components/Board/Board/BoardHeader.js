import React, { useState } from 'react';
import './BoardHeader.scss';
import Score from '../Score/Score';
import Timer from '../Timer/Timer';

const BoardHeader = ({ user, playerScore, gameFinished }) => {

    const [headerDisplay, setHeaderDisplay] = useState('score');

    const handleheaderDisplay = () => {
        headerDisplay === 'time' ? setHeaderDisplay('score') : setHeaderDisplay('time')
    }

    return (
        <div className='board-header'>
            <Score 
                playerScore={playerScore} 
                user={user} 
                className={headerDisplay}   
            />
            <Timer 
                gameFinished={gameFinished} 
                user={user} 
                className={headerDisplay} 
            />
            <input type='button' value={headerDisplay} onClick={() => handleheaderDisplay()} />
        </div>
    )
}

export default BoardHeader;