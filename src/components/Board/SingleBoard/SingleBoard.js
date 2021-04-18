import React, { useState, useContext, useEffect } from 'react';
import './SingleBoard.scss'
import Board from '../Board/Board';
import { UserContext }  from '../../../contexts/UserContext';

const SingleBoard = () => {

    const { userInfo } = useContext(UserContext);

    const multiplayer = false;
    const drunkMode = false;

    return (
        <div className='board-container'>
            <Board 
                user={userInfo} 
                multiplayer={multiplayer} 
                drunkMode={drunkMode} 
            />
        </div>
    )
}

export default SingleBoard;