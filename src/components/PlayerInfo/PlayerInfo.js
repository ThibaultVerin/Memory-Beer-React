import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './PlayerInfo.scss';
import { UserContext }  from '../../contexts/UserContext';

const PlayerInfo = () => {

    const { setUserInfo } = useContext(UserContext);
    const [playerName, setPlayerName] = useState('');

    const handleChange = (e) => {
        setPlayerName(e.target.value)
    }

    const handleSubmit = () => {
        setUserInfo({name: playerName})
    }

    return (
        
        <div className='singlePlayer-info'>
            <div className='singlePlayer-name'>
                <h3>Name</h3>
                <input type='text' name='player-name' placeholder='enter your name' onChange={(e) => handleChange(e)}/>
            </div>
            <div className='singlePlayer-button'>
                <Link to='/'>
                    <button type='button'>Back/resetidea</button>
                </Link>
                <Link to='/single-board'>
                    <button type='submit' onClick={() => handleSubmit()}>Enter</button>
                </Link>
            </div>
        </div>
        
    )
}

export default PlayerInfo