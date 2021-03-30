import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import '../Style/HomeInput.scss'
import { LevelContext }  from '../../contexts/LevelContext';
import { NumberUserContext }  from '../../contexts/NumberUserContext';
import { LevelButton } from '../../data/LocalData';
import HomeInput from '../Style/HomeInput';

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