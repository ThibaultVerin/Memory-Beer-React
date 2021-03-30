import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import './MultiplayerInfo.scss';
import { UserContext }  from '../../contexts/UserContext';
import { PlayerModeContext }  from '../../contexts/PlayerModeContext';
import { LevelContext }  from '../../contexts/LevelContext';

const MultiplayerInfo = () => {

    const history = useHistory();

    const { setUserInfo } = useContext(UserContext);
    const { numberUserInfo } = useContext(PlayerModeContext);
    const { levelSelected } = useContext(LevelContext);

    const [actualUser, setActualUser] = useState(1);
    const [playerName, setPlayerName] = useState('');

    const handleChange = (e) => {
        setPlayerName(e.target.value);
    }

    const handleSubmit = () => {
        if (actualUser === numberUserInfo) {
            history.push('/multi-board')
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
            <div className='multiPlayer-form'>
                <p>{numberUserInfo >= 2 ? 'Multi player mode' : 'Single player |'} {levelSelected} mode</p>
                <div className='multiPlayer-name'>
                    <h1>{actualUser} Player Name</h1>
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
                        <button 
                            type='button' 
                            onClick={() => history.push('/')}
                        >
                        Home
                        </button>
                        <input 
                            type='submit' 
                            value={actualUser === numberUserInfo ? 'Play' : 'Next'}
                            onClick={() => handleSubmit()}
                        />
                </div>
            </div>
        </div>
        
    )
}

export default MultiplayerInfo;