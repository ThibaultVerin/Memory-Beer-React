import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Home.scss'
import { NumberUserContext }  from '../../contexts/NumberUserContext';

const Home = () => {

    const homeButton = ['Single-Player', 'Multi-Player', 'Tutorial'];
    const { setNumberUserInfo } = useContext(NumberUserContext);

    const handleClick = () => {
        setNumberUserInfo(2);
    }


    return (
            <div className='home-button'>
                {homeButton.map((button) =>
                    <Link to={{ pathname: `/${button.toLowerCase()}` }}>
                        <button type='button' onClick={handleClick}>{button}</button>
                    </Link>
                )}
            </div>
    )
}

export default Home;