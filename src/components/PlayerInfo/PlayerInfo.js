import React, { useContext } from 'react';
import './PlayerInfo.scss';
import { PlayerModeContext }  from '../../contexts/PlayerModeContext';
import { LevelContext }  from '../../contexts/LevelContext';
import PlayerName from '../Style/PlayerName.js';

const PlayerInfo = () => {

    const { playerMode } = useContext(PlayerModeContext);
    const { levelSelected } = useContext(LevelContext);


    return (
        
        <div className='player-info-container'>
            <p>{playerMode} mode | {levelSelected} mode</p>
            <PlayerName />
        </div>       
    )
}

export default PlayerInfo