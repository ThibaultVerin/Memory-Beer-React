import React, { useState } from 'react';
import './PlayerInfo.scss'

const PlayerInfo = () => {

    const [multiplayer, setMultiplayer] = useState(true);
    const [playerNumber, setPlayerNumber] = useState(0);
    const [playerName, setPlayerName] = useState('')

    const handleChange = (e) => {
        setPlayerName(e.target.value)
    }

    return (
        <div className='playerInfo-container'>
            {multiplayer ? 
                <div className='singlePlayer-info'>
                    <div className='singlePlayer-name'>
                        <h3>Player Name</h3>
                        <input type='text' name='player-name' placeholder='enter your name' onChange={(e) => handleChange(e)}/>
                    </div>
                    <div className='singlePlayer-button'>
                        <button type='button'>Back</button>
                        <button type='button'>Enter</button>
                    </div>
                </div> : 
                <div>
                    <label for='player-number-select'>Number of players</label>
                    <select name='number-player'>
                        <option value='2'>2 players</option>
                        <option value='3'>3 players</option>
                        <option value='4'>4 players</option>
                    </select>
                </div> }
        </div>
    )
}

export default PlayerInfo;