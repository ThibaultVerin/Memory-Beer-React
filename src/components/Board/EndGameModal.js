import React from 'react';
import { useHistory } from "react-router-dom";
import './EndGameModal.scss'

const EndGameModal = () => {
    return (
        <div className='endgame-modal'>
            <h1>Finished</h1>
            {/* <p>You solved this game in 02:25 congratulation !</p>
            <p>It's now time to see your score ...</p>
            <p>Try to beat your score to climb on top of the rank and be number 1</p>
            <p>or challenge yourself with hardcore difficulties</p> */}
        </div>
    )
}

export default EndGameModal;