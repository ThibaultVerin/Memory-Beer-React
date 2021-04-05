import React, { useState, useContext, useEffect } from 'react';
import './MultiBoard.scss'
import Board from '../Board/Board';
import { UserContext }  from '../../../contexts/UserContext';
import { ActualPlayerContext }  from '../../../contexts/ActualPlayerContext';

const MultiBoard = () => {

    const { userInfo } = useContext(UserContext);
    const { actualPlayer, setActualPlayer } = useContext(ActualPlayerContext);

    // const multiplayer = {userInfo.length > 1 ? true : false};
    const multiplayer = true;
    const drunkMode = false;

    return (
        <div>
        <button type='button' onClick={() => setActualPlayer(actualPlayer + 1)}> + </button>
        <button type='button' onClick={() => setActualPlayer(actualPlayer - 1)}> - </button>
        {userInfo.map((user) => 
            <div className={user.id === actualPlayer ? 'show-board' : 'hide-board'}>
                <Board user={user} multiplayer={multiplayer} drunkMode={drunkMode} />
            </div>
        )}
        </div>
    )
}

export default MultiBoard;