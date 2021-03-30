import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import '../Style/HomeInput.scss';
import { PlayerModeContext }  from '../../contexts/PlayerModeContext';
import { LevelContext }  from '../../contexts/LevelContext';
import { LevelButton } from '../../data/LocalData';
import HomeInput from '../Style/HomeInput';

const LevelSelection = () => {

    const history = useHistory();

    const { playerMode } = useContext(PlayerModeContext);
    const { setLevelSelected } = useContext(LevelContext);

    const handleClick = (e) => {

        setLevelSelected(e.target.value);
        
        if (playerMode === 1) {
            history.push('/single-player')
        } else if (playerMode === 2) {
            history.push('/multi-player')
        }
    }

    return (
        <div className='home-input'>
            {LevelButton.map((button, index) =>
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