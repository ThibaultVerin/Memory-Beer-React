import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PlayerInfo.scss'
import MultiplayerInfo from './MultiplayerInfo'

const PlayerInfo = () => {

    const [playerName, setPlayerName] = useState('')

    const handleChange = (e) => {
        setPlayerName(e.target.value)
    }

    return (
        <div className='playerInfo-container'>
                <div className='singlePlayer-info'>
                    <div className='singlePlayer-name'>
                        <h3>Player Name</h3>
                        <input type='text' name='player-name' placeholder='enter your name' onChange={(e) => handleChange(e)}/>
                    </div>
                    <div className='singlePlayer-button'>
                        <Link to='/'>
                            <button type='button'>Back</button>
                        </Link>
                        <Link to='/single-play'>
                            <button type='button'>Enter</button>
                        </Link>
                    </div>
                </div>
        </div>
    )
}

export default PlayerInfo;