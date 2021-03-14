import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import './LevelSelection.scss'
import { LevelContext }  from '../../contexts/LevelContext';
import { NumberUserContext }  from '../../contexts/NumberUserContext';

const LevelSelection = () => {

    const history = useHistory();

    const { levelSelected, setLevelSelected } = useContext(LevelContext);
    const { numberUserInfo } = useContext(NumberUserContext);

    const levelButton = ['Sober', 'Drunk', 'Wasted'];

    const handleClick = (e) => {
        setLevelSelected(e.target.value);
        if (numberUserInfo === 1) {
            history.push('/single-player')
        } else if (numberUserInfo === 2) {
            history.push('/multi-player')
        }
    }

    console.log(levelSelected);
    console.log(numberUserInfo);

    return (
        <div className='home-button'>
        {levelButton.map((button, index) =>
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