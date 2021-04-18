import React, { useContext } from 'react'
import './PlayerName.scss';
import styled from 'styled-components';
import { NumberPlayerContext }  from '../../contexts/NumberPlayerContext';
import MainButton from './MainButton';

const Button = styled.input`
`

const PlayerName = ({ handleSubmit, handleChange, actualUser }) => {

    const { numberPlayer } = useContext(NumberPlayerContext);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(e);
        }
    }

    const handleClick = (e) => {
        handleSubmit(e);
    }
    
    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                {numberPlayer > 1 ? 
                    <label>{actualUser} Player Name</label> :
                    <label>Name :</label>
               } 
                <input 
                    type='text' 
                    name='name' 
                    placeholder='Enter your name'
                    onChange={(e) => handleChange(e)}
                    onKeyDown={handleKeyDown}
                    required
                    min='1'
                />
                <div className='main-button-container'>
                    <MainButton 
                        type='button'
                        value='Levels'
                        link='/select-level'
                    />
                    <MainButton 
                        type={numberPlayer !== actualUser ? 'button' : 'submit'} 
                        value='Play'
                        handleClick={handleClick}
                    />
                </div>
            </form>
        </>
    )
}

export default PlayerName;