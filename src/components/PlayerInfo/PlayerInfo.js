import React, { useContext, useState } from 'react';
import { useHistory } from "react-router-dom";
import './PlayerInfo.scss';
import { UserContext }  from '../../contexts/UserContext';
import { NumberUserContext }  from '../../contexts/NumberUserContext';
import { LevelContext }  from '../../contexts/LevelContext';

const PlayerInfo = () => {

    const history = useHistory();

    const { setUserInfo } = useContext(UserContext);
    const { numberUserInfo } = useContext(NumberUserContext);
    const { levelSelected } = useContext(LevelContext);
    
    const [playerName, setPlayerName] = useState('');

    const handleChange = (e) => {
        setPlayerName(e.target.value);
    }

    const handleSubmit = () => {
        setUserInfo({id: 1, name: playerName});
        history.push('/single-board');
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    }


    return (
        
        <div className='singlePlayer-info'>
            <form onSubmit={() => handleSubmit()}>
                <p>{numberUserInfo >= 2 ? 'Multi player mode' : 'Single player |'} {levelSelected} mode</p>
                <div className='singlePlayer-name'>
                    <h1>Name :</h1>
                    <input 
                        type='text' 
                        name='player-name' 
                        placeholder='Enter your name' 
                        required
                        onChange={(e) => handleChange(e)}
                        onKeyDown={handleKeyDown}
                    />
                </div>
                <div className='singlePlayer-button'>
                        <button 
                            type='button' 
                            onClick={() => history.push('/')}
                        >
                            Home
                        </button>
                        <input 
                            type='submit' 
                            value='Play' 
                            onClick={() => handleSubmit()}
                        />
                </div>
            </form>
        </div>       
    )
}

export default PlayerInfo