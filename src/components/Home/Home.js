import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss'

const Home = () => {

    const homeButton = ['Single-Player', 'Multi-Player', 'Tutorial'];

    const handleClick = () => {
        
    }


    return (
            <div className='home-button'>
                {homeButton.map((button) =>
                    <Link to={{ pathname: `/${button.toLowerCase()}` }}>
                        <button type='button' onClick={history.pushState('/level-selection')}>{button}</button>
                    </Link>
                )}
            </div>
    )
}

export default Home;