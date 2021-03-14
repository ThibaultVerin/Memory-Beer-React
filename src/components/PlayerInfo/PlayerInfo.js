import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './PlayerInfo.scss';
import { UserContext }  from '../../contexts/UserContext';

const PlayerInfo = () => {

    const { userInfo, setUserInfo } = useContext(UserContext);
    const [playerName, setPlayerName] = useState('');
    const [test, setTest] = useState([]);

    const handleChange = (e) => {
        setPlayerName(e.target.value)
        // setUserInfo.push({name: 'Breh', id: 2 })
        console.log(playerName);
    }
    console.log(test)
    console.log(userInfo)

    const handleSubmit = () => {
        setUserInfo([{id: 2, name: 'Breh'}])
    }

    return (
        
        <div className='singlePlayer-info'>
        <form onSubmit={(e) => handleChange(e)}>
            <div className='singlePlayer-name'>
                <h3>Name</h3>
                <input type='text' name='player-name' placeholder='enter your name'/>
            </div>
            <div className='singlePlayer-button'>
                <Link to='/'>
                    <button type='button'>Back/resetidea</button>
                </Link>
                <Link to='/single-board'>
                    <input type='submit' value='enter' onSubmit={() => handleSubmit()}/>
                </Link>
            </div>
            </form>
        </div>
        
    )
}

export default PlayerInfo