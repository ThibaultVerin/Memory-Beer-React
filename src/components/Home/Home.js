import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss'

const Home = () => {

    const homeButton = ['Single-Player', 'Multi-Player', 'Tutorial'];

    const handleClick = () => {
        console.log('Breh')
    }


    return (
        <div className='home-container'>
            <div className='home-button'>
                {homeButton.map((button) =>
                    <Link to={{ pathname: `/${button.toLowerCase()}` }}>
                        <button type='button' onClick={handleClick}>{button}</button>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default Home;