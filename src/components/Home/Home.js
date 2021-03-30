import React, { useContext, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import '../Style/HomeInput.scss'
import { UserContext }  from '../../contexts/UserContext';
import { PlayerModeContext }  from '../../contexts/PlayerModeContext';
import { HomeButton } from '../../data/LocalData';
import HomeInput from '../Style/HomeInput';

const Home = () => {

    const history = useHistory();

    const { setUserInfo } = useContext(UserContext);
    const { setPlayerMode } = useContext(PlayerModeContext);

    /*eslint-disable */
    useEffect(() => {
        setPlayerMode();
    }, [])
    /*eslint-enable */

    const handleClick = (e) => {

        setUserInfo([]);
        setPlayerMode(e.target.value);


        history.push('/select-level')
    }


    return (
        <div className='home-input'>
            {HomeButton.map((button, index) =>
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