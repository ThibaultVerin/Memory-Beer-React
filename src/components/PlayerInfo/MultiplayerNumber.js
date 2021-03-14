import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './MultiplayerNumber.scss'
import { NumberUserContext }  from '../../contexts/NumberUserContext';

const MultiplayerInfo = () => {

    const numberPlayer = ['2', '3', '4'];
    const { setNumberUserInfo } = useContext(NumberUserContext);

    const handleChange = (e) => {
        setNumberUserInfo(parseInt(e.target.value))
    } 

    return (
        <div className='multiPlayer-info'>
            <h3>Choose the number of players</h3>
            <select name='number-player' onChange={(e) => handleChange(e)}>
                {numberPlayer.map((number) => 
                    <option value={number}>{number} Players</option>
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