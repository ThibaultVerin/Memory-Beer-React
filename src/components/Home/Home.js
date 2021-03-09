import React from 'react';
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
                    <button type='button' onClick={handleClick}>{button}</button>
                )}
            </div>
        </div>
    )
}

export default Home;