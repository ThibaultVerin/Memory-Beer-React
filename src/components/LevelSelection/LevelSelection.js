import React, { useContext, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import '../Style/HomeInput.scss';
import { PlayerModeContext }  from '../../contexts/PlayerModeContext';
import { LevelContext }  from '../../contexts/LevelContext';
import { LevelInput } from '../../data/LocalData';
import HomeInput from '../Style/HomeInput';

const LevelSelection = () => {

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
            history.push(`/${playerMode.toLowerCase()}`);
        } else {
            history.push('/');
            alert('Sorry the session was lost');
        }
    }

    return (
        <div className='home-input'>
            {LevelInput.map((button, index) =>
                <HomeInput 
                    key={index}
                    type='button'
                    value={button}
                    handleClick={handleClick}            
                />
            )}
        </div>
    )
}

export default LevelSelection;