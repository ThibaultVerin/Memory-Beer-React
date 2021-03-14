import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MultiplayerNumber.scss'

const MultiplayerInfo = () => {

    const [playerNumber, setPlayerNumber] = useState(2);
    const numberPlayer = ['2', '3', '4'];

    const handleChange = (e) => {
        setPlayerNumber(parseInt(e.target.value))
    } 

    return (
        <div className='multiPlayer-info'>
            <h3>Choose the number of players</h3>
            <select name='number-player' onChange={(e) => handleChange(e)}>
                {numberPlayer.map((number) => 
                    <option value={number} onChange={(e) => handleChange(e)}>{number} Players</option>
                )}
            </select>
            <div className='multiPlayer-button'>
            <Link to='/'>
                <button type='button'>Back</button>
            </Link>
            <Link to='/multi-info'>
                <button type='button'>Enter</button>
            </Link>     
            </div>
        </div>
    )
}

export default MultiplayerInfo;