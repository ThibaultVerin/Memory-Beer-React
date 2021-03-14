import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import './MultiplayerInfo.scss';
import { UserContext }  from '../../contexts/UserContext';
import { NumberUserContext }  from '../../contexts/NumberUserContext';

const MultiplayerInfo = () => {

    const history = useHistory();

    const { setUserInfo } = useContext(UserContext);
    const { numberUserInfo } = useContext(NumberUserContext);

    const [actualUser, setActualUser] = useState(1);
    const [playerName, setPlayerName] = useState('');

    const handleChange = (e) => {
        setPlayerName(e.target.value);
    }

    const handleSubmit = () => {
        if (actualUser === numberUserInfo) {
            history.push('/multi-board', { from: 'MultiplayerInfo' })
        }
        setUserInfo((userInfo) => [
            ...userInfo,{
                id: actualUser,
                name: playerName,
            },
        ]);
        setActualUser(actualUser + 1);
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    }

    useEffect(() => {
        setPlayerName('');
    }, [actualUser]);

    return (
        
        <div className='multiPlayer-info'>
            <div className='multiPlayer-name'>
                <h3>{actualUser} Player Name</h3>
                <input 
                    type='text'
                    name='player-name'
                    value={playerName}
                    placeholder='Enter your name' 
                    onChange={(e) => handleChange(e)} 
                    onKeyDown={handleKeyDown}
                />
            </div>
            <div className='multiPlayer-button'>
                    <button type='button' onClick={() => history.push('/')}>Back/resetidea</button>
                    <input type='submit' value='Enter' onClick={() => handleSubmit()}/>
            </div>
        </div>
        
    )
}

export default MultiplayerInfo;