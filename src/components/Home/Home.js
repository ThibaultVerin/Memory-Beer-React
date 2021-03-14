import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Home.scss'
import { NumberUserContext }  from '../../contexts/NumberUserContext';
import { UserContext }  from '../../contexts/UserContext';

const Home = () => {

    const { setUserInfo } = useContext(UserContext);
    const { setNumberUserInfo } = useContext(NumberUserContext);

    const homeButton = ['Single-Player', 'Multi-Player', 'Tutorial'];

    const handleClick = (e) => {

        setUserInfo([]);

        switch(e.target.value) {
            case 'Single-Player' :
                setNumberUserInfo(1);
                break;
            case 'Multi-Player':
                setNumberUserInfo(2);
                break;
            case 'Tutorial':
                setNumberUserInfo(0);
                break;
            default:
                setNumberUserInfo(0);
        }
    }


    return (
            <div className='home-button'>
                {homeButton.map((button, index) =>
                    <Link to={{ pathname: `/${button.toLowerCase()}` }}>
                        <input 
                            key={index}
                            type='button'
                            value={button}
                            onClick={(e) => handleClick(e)}/>
                    </Link>
                )}
            </div>
    )
}

export default Home;