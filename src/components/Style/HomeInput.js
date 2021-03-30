import React from 'react';
import './HomeInput.scss'

const HomeInput = ({ index, value, handleClick }) => {

    return (
        <div className='home-input'>
            <input 
                key={index}
                type='button'
                value={value}
                onClick={(e) => handleClick(e)}/>
         </div>
    )
}

export default HomeInput;