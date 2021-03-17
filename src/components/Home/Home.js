import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import './Home.scss'
import { NumberUserContext }  from '../../contexts/NumberUserContext';
import { UserContext }  from '../../contexts/UserContext';
import { HomeButton } from '../../data/LocalData';

const Home = () => {

    const history = useHistory();

    const { setUserInfo } = useContext(UserContext);
    const { setNumberUserInfo } = useContext(NumberUserContext);

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
            <div className='home-button'>
                {HomeButton.map((button, index) =>
                        <input 
                            key={index}
                            type='button'
                            value={button}
                            onClick={(e) => handleClick(e)}/>
                )}
            </div>
    )
}

export default Home;