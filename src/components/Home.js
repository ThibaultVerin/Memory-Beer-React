import React from 'react';
import './Home.scss'

const Home = () => {

    const homeButton = ['1 Player', '2 Player', 'Tutorial'];

    return (
        <div className='home-container'>
            <div className='home-button'>
                {homeButton.map((button) => 
                    <button type='button'>{button}</button>
                )}
            </div>
        </div>
    )
}

export default Home;