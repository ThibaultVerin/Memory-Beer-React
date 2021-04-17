import React, { useContext, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import HomeInput from '../Style/HomeInput';
import { HomeContainer } from '../Style/StyledComponents';
import { PlayerModeContext }  from '../../contexts/PlayerModeContext';
import { LevelContext }  from '../../contexts/LevelContext';
import { LevelInput } from '../../data/LocalData';

export const LevelSelection = () => {

    const history = useHistory();

    const { playerMode } = useContext(PlayerModeContext);
    const { setLevelSelected } = useContext(LevelContext);

    /*eslint-disable */
    useEffect(() => {
        setLevelSelected();
    }, [])
    /*eslint-enable */

    const handleClick = (e) => {
        setLevelSelected(e.target.value);
        if (playerMode) {
            if (playerMode === 'Single-Player'){
                history.push('/player-info')
            } else {
                history.push(`/${playerMode.toLowerCase()}`);
            }
        } else {
            history.push('/');
            alert('Sorry the session was lost');
        }
    }

    return (
        <HomeContainer>
            {LevelInput.map((button, index) =>
                <HomeInput 
                    key={index}
                    type='button'
                    value={button}
                    handleClick={handleClick}            
                />
            )}
        </HomeContainer>
    )
}

export default LevelSelection;