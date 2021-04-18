import React, { useContext, useEffect } from 'react';
import { 
    PlayerNumberContainer, 
    PlayerNumberTitle, 
    PlayerNumberSelect, 
    PlayerNumberButtonContainer
} from '../Style/StyledComponents';
import MainButton from '../Style/MainButton.js';
import { NumberPlayerContext }  from '../../contexts/NumberPlayerContext';
import { NumberPlayer, NumberButton } from '../../data/LocalData';

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
        <PlayerNumberContainer>
            <PlayerNumberTitle>Choose the number of players</PlayerNumberTitle>
            <PlayerNumberSelect
                name='number-player' 
                onChange={(e) => handleChange(e)}
            >
                {NumberPlayer.map((number) => 
                    <option 
                        key={number} 
                        value={number}>{number} Players
                    </option>
                )}
            </PlayerNumberSelect>
            <PlayerNumberButtonContainer>
                {NumberButton.map((button, index) => 
                    <MainButton 
                        key={index}
                        type='button'
                        value={button}
                        link={button === NumberButton[0] ? '/select-level' : '/player-info'}
                    />
                )} 
            </PlayerNumberButtonContainer>
        </PlayerNumberContainer>
    )
}

export default MultiplayerInfo;