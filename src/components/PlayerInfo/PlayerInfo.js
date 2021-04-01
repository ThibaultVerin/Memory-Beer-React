import React, { useContext, useState, useEffect } from 'react';
import './PlayerInfo.scss';
import { useHistory } from "react-router-dom";
import { UserContext }  from '../../contexts/UserContext';
import { PlayerModeContext }  from '../../contexts/PlayerModeContext';
import { LevelContext }  from '../../contexts/LevelContext';
import { NumberPlayerContext }  from '../../contexts/NumberPlayerContext';
import PlayerName from '../Style/PlayerName.js';

const PlayerInfo = () => {

    const history = useHistory();

    const { setUserInfo } = useContext(UserContext);
    const { playerMode } = useContext(PlayerModeContext);
    const { levelSelected } = useContext(LevelContext);
    const { numberPlayer } = useContext(NumberPlayerContext);

    const [actualUser, setActualUser] = useState(1);
    const [playerName, setPlayerName] = useState('');

    /*eslint-disable */
    useEffect(() => {
        setUserInfo([]);
    }, [])
    /*eslint-enable */

    const handleSubmitSingle = (e) => {
        setUserInfo({
            id: 1, 
            name: playerName,
            score: 0,
            time: null,
        });
        history.push('/single-board');
        e.preventDefault();
    }

    const handleSubmitMulti = (e) => {
        if (actualUser === numberPlayer) {
            history.push('/multi-board')
        }
        setUserInfo((userInfo) => [
            ...userInfo,{
                id: actualUser,
                name: playerName,
                score: 0,
                time: null,
            },
        ]);
        setActualUser(actualUser + 1);
        e.preventDefault();
    }

    const handleSubmit = (e) => {
        if (numberPlayer > 1) {
            handleSubmitMulti(e);
        } else {
            handleSubmitSingle(e);
        }
    }

    const handleChange = (e) => {
        setPlayerName(e.target.value);
    }

    return (
        
        <div className='player-info-container'>
            <p>{playerMode} mode | {levelSelected} mode</p>
            <PlayerName 
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                actualUser={actualUser} 
            />
        </div>       
    )
}

export default PlayerInfo