import React, { useContext, useState } from 'react';
import { useHistory } from "react-router-dom";
import './PlayerInfo.scss';
import { UserContext }  from '../../contexts/UserContext';

const PlayerInfo = () => {

    const history = useHistory();

    const { setUserInfo } = useContext(UserContext);
    
    const [playerName, setPlayerName] = useState('');

    const handleChange = (e) => {
        setPlayerName(e.target.value)
    }

    const handleSubmit = () => {
        setUserInfo({id: 1, name: playerName})
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    }


    return (
        
        <div className='singlePlayer-info'>
        <form onSubmit={() => handleSubmit()}>
            <div className='singlePlayer-name'>
                <h3>Name</h3>
                <input 
                    type='text' 
                    name='player-name' 
                    placeholder='enter your name' 
                    required="required"
                    onChange={(e) => handleChange(e)}
                    onKeyDown={handleKeyDown}
                />
            </div>
            <div className='singlePlayer-button'>
                    <button type='button' onClick={() => history.push('/')}>Back/resetidea</button>
                    <input type='submit' value='Enter' onClick={() => history.push('/single-board')}/>
            </div>
            </form>
        </div>       
    )
}

export default PlayerInfo