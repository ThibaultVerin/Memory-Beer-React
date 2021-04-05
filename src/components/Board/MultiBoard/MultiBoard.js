import React, { useState, useContext, useEffect } from 'react';
import './MultiBoard.scss'
import SingleBoard from '../SingleBoard/SingleBoard';
import { UserContext }  from '../../../contexts/UserContext';

const MultiBoard = () => {

    const { userInfo } = useContext(UserContext);

    const [actualPlayer, setActualPlayer] = useState(1);

    const multiplayer = true;

    return (
        <div>
        <button type='button' onClick={() => setActualPlayer(actualPlayer + 1)}> + </button>
        <button type='button' onClick={() => setActualPlayer(actualPlayer - 1)}> - </button>
        {userInfo.map((user) => 
            <div className={user.id === actualPlayer ? 'show-board' : 'hide-board'}>
                <SingleBoard user={user} multiplayer={multiplayer} />
            </div>
        )}
        </div>
    )
}

export default MultiBoard;