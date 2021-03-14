import React from 'react';
import './LevelSelection.scss'

const LevelSelection = () => {

    const levelButton = ['Sober', 'Drunk', 'Wasted'];

    return (
        <div className='home-button'>
        {levelButton.map((button) =>
                <button type='button'>{button}</button>
        )}
    </div>
    )
}

export default LevelSelection;