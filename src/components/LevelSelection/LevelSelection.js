import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import './LevelSelection.scss'
import { LevelContext }  from '../../contexts/LevelContext';
import { NumberUserContext }  from '../../contexts/NumberUserContext';
import { LevelButton } from '../../data/LocalData';

const LevelSelection = () => {

    const history = useHistory();

    const { setLevelSelected } = useContext(LevelContext);
    const { numberUserInfo } = useContext(NumberUserContext);

    const handleClick = (e) => {
        setLevelSelected(e.target.value);
        if (numberUserInfo === 1) {
            history.push('/single-player')
        } else if (numberUserInfo === 2) {
            history.push('/multi-player')
        }
    }

    return (
        <div className='level-selection-button'>
        {LevelButton.map((button, index) =>
                <input 
                    key={index}
                    type='button'
                    value={button}
                    onClick={(e) => handleClick(e)}
                />
        )}
    </div>
    )
}

export default LevelSelection;