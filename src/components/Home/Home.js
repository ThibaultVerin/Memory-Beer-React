import React, { useContext, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import HomeInput from '../Style/HomeInput';
import { HomeContainer } from '../Style/StyledComponents';
import { PlayerModeContext }  from '../../contexts/PlayerModeContext';
import { NumberPlayerContext }  from '../../contexts/NumberPlayerContext';
import { ModeInput } from '../../data/LocalData';


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
        <HomeContainer>
            {ModeInput.map((button, index) =>
                <HomeInput 
                    key={index}
                    type='button'
                    value={button}
                    handleClick={handleClick}            
                />
            )}
        </HomeContainer>
    )
}

export default Home;