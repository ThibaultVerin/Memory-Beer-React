import React, { useContext, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import '../Style/HomeInput.scss'
import { NumberUserContext }  from '../../contexts/NumberUserContext';
import { UserContext }  from '../../contexts/UserContext';
import { HomeButton } from '../../data/LocalData';
import HomeInput from '../Style/HomeInput';

const Home = () => {

    const history = useHistory();

    const { setUserInfo } = useContext(UserContext);
    const { setNumberUserInfo } = useContext(NumberUserContext);

    /*eslint-disable */
    useEffect(() => {
        setNumberUserInfo(0);
    }, [])
    /*eslint-enable */

    const handleClick = (e) => {

        setUserInfo([]);

        switch(e.target.value) {
            case 'Single - Player' :
                setNumberUserInfo(1);
                break;
            case 'Multi - Player':
                setNumberUserInfo(2);
                break;
            case 'Tutorial':
                setNumberUserInfo(0);
                break;
            default:
                setNumberUserInfo(0);
        }

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