import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Home.scss'
import { NumberUserContext }  from '../../contexts/NumberUserContext';

const Home = () => {

    const homeButton = ['Single-Player', 'Multi-Player', 'Tutorial'];
    const { setNumberUserInfo } = useContext(NumberUserContext);

    const handleClick = (e) => {

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
                {homeButton.map((button) =>
                    <Link to={{ pathname: `/${button.toLowerCase()}` }}>
                        <input key={button} type='button' value={button} onClick={(e) => handleClick(e)}/>
                    </Link>
                )}
            </div>
    )
}

export default Home;