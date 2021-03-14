import React from 'react';
import './LevelSelection.scss'

const LevelSelection = () => {

    const levelButton = ['Sober', 'Drunk', 'Wasted'];

    return (
        <div className='home-button'>
        {levelButton.map((button, index) =>
                <input 
                    key={index}
                    type='button'
                    value={button}
                />
        )}
    </div>
    )
}

export default LevelSelection;