import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import PlayerName from '../Style/PlayerName.js';
import { PlayerInfoContainer, PlayerInfoMode } from '../Style/StyledComponents';
import { UserContext }  from '../../contexts/UserContext';
import { PlayerModeContext }  from '../../contexts/PlayerModeContext';
import { LevelContext }  from '../../contexts/LevelContext';
import { NumberPlayerContext }  from '../../contexts/NumberPlayerContext';


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
        e.preventDefault();
        setUserInfo({
            id: 1, 
            name: playerName,
            score: 0,
            time: null,
        });
        history.push('/single-board');
    }

    const handleSubmitMulti = (e) => {
        e.preventDefault();
        setActualUser(actualUser + 1);
        setUserInfo((userInfo) => [
            ...userInfo,{
                id: actualUser,
                name: playerName,
                score: 0,
                time: null,
            },
        ]);

        if (actualUser === numberPlayer) {
            history.push('/multi-board')
        }
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
        
        <PlayerInfoContainer>
            <PlayerInfoMode>{playerMode} | {levelSelected} mode</PlayerInfoMode>
            <PlayerName 
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                actualUser={actualUser} 
            />
        </PlayerInfoContainer>       
    )
}

export default PlayerInfo