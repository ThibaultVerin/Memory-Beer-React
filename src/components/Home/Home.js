import React, { useContext, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import '../Style/HomeInput.scss'
import { PlayerModeContext }  from '../../contexts/PlayerModeContext';
import { NumberPlayerContext }  from '../../contexts/NumberPlayerContext';
import { ModeInput } from '../../data/LocalData';
import HomeInput from '../Style/HomeInput';

const Home = () => {

    const history = useHistory();

    const { setPlayerMode } = useContext(PlayerModeContext);
    const { setNumberPlayer } = useContext(NumberPlayerContext);

    /*eslint-disable */
    useEffect(() => {
        setPlayerMode();
    }, [])
    /*eslint-enable */

    const handleClick = (e) => {

        if (e.target.value === 'Single-Player') {
            setNumberPlayer(1);
        }
        setPlayerMode(e.target.value);
        history.push('/select-level');
    }


    return (
        <div className='home-input'>
            {ModeInput.map((button, index) =>
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

export default Home;