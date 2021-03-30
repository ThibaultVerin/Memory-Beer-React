import React, { useContext, useState } from 'react';
import './PlayerName.scss';
import { UserContext }  from '../../contexts/UserContext';
import { useHistory } from "react-router-dom";

const PlayerName = () => {

    const history = useHistory();

    const { setUserInfo } = useContext(UserContext);

    const [playerName, setPlayerName] = useState('');

    const handleChange = (e) => {
        setPlayerName(e.target.value);
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    }

    const handleSubmit = (e) => {
        setUserInfo({id: 1, name: playerName});
        history.push('/single-board');
        e.preventDefault();
    }
    
    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>Name :</label>
                <input 
                    type='text' 
                    name='name' 
                    placeholder='Enter your name'
                    onChange={(e) => handleChange(e)}
                    onKeyDown={handleKeyDown}
                    required
                    min='1'
                />
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
                        />
                </div>
            </form>
        </>
    )
}

export default PlayerName;