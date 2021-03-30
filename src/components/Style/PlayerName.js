import React, { useContext } from 'react'
import './PlayerName.scss';
import { useHistory } from "react-router-dom";
import { NumberPlayerContext }  from '../../contexts/NumberPlayerContext';

const PlayerName = ({ handleSubmit, handleChange, actualUser }) => {

    const history = useHistory();

    const { numberPlayer } = useContext(NumberPlayerContext);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(e);
        }
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
                <div className='singlePlayer-button'>
                        <button 
                            type='button' 
                            onClick={() => history.push('/')}
                        >
                            Home
                        </button>
                        <input 
                            type='submit' 
                            value='Play'
                        />
                </div>
            </form>
        </>
    )
}

export default PlayerName;