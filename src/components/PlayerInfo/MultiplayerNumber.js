import React, { useContext, useEffect } from 'react';
import './MultiplayerNumber.scss'
import { NumberPlayerContext }  from '../../contexts/NumberPlayerContext';
import { NumberPlayer, NumberButton } from '../../data/LocalData';
import MainButton from '../Style/MainButton.js';

const MultiplayerInfo = () => {

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
                    <MainButton 
                        key={index}
                        type='button'
                        value={button}
                        link={button === NumberButton[0] ? '/select-level' : '/single-player'}
                    />
                )} 
            </div>
        </div>
    )
}

export default MultiplayerInfo;