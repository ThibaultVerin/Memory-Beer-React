import React, { useContext, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import './MultiplayerNumber.scss'
import { NumberPlayerContext }  from '../../contexts/NumberPlayerContext';
import { NumberPlayer, NumberButton } from '../../data/LocalData';

const MultiplayerInfo = () => {

    const history = useHistory();

    const { setNumberPlayer } = useContext(NumberPlayerContext);

    /*eslint-disable */
    useEffect(() => {
        setNumberPlayer(2);
    }, [])
    /*eslint-enable */

    const handleChange = (e) => {
        setNumberPlayer(parseInt(e.target.value))
    } 

    return (
        <div className='multiPlayer-number-info'>
            <h1>Choose the number of players</h1>
            <select 
                name='number-player' 
                onChange={(e) => handleChange(e)}
            >
                {NumberPlayer.map((number) => 
                    <option 
                        key={number} 
                        value={number}>{number} Players
                    </option>
                )}
            </select>
            <div className='multiPlayer-button'>
                {NumberButton.map((button, index) => 
                    <button 
                        key={index}
                        type='button' 
                        onClick={() => {button === NumberButton[0] ? history.push('/select-level') : history.push('/single-player')}}
                    >
                        {button}
                    </button>
                )} 
            </div>
        </div>
    )
}

export default MultiplayerInfo;