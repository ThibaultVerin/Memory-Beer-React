import React, { useEffect, useState } from 'react';
import './MultiplayerInfo.scss'

const MultiplayerInfo = () => {

    const [playerNumber, setPlayerNumber] = useState(2);


    // const MultiplayerCards = () => {
    //     console.log(playerNumber);
    //     for (let i=1; i<playerNumber; i++) {
    //         return (            
    //             <div className='multiPlayer-info'>
    //                 <div className='singlePlayer-name'>
    //                     <h3>Player Name</h3>
    //                     <input type='text' name='player-name' placeholder='enter your name' onChange={(e) => handleChange(e)}/>
    //                 </div>
    //                 <div className='singlePlayer-button'>
    //                     <button type='button'>Back</button>
    //                     <button type='button'>Enter</button>
    //                 </div>
    //             </div>
    //         )

    //     }
    // }

    // useEffect(() => {
    //     MultiplayerCards();
    // }, [])

    const numberPlayer = ['2', '3', '4'];

    const handleChange = (e) => {
        console.log(parseInt(e.target.value))
        setPlayerNumber(parseInt(e.target.value))
    } 

    return (
        <div className='multiPlayer-info'>
            <h3>Choose the number of players</h3>
            <select name='number-player' onChange={(e) => handleChange(e)}>
                {numberPlayer.map((number) => 
                    <option value={number} onChange={(e) => handleChange(e)}>{number} Players</option>
                )}
            </select>
            <div className='multiPlayer-button'>
                <button type='button'>Back</button>
                <button type='button'>Enter</button>
            </div>
        </div>
    )
}

export default MultiplayerInfo;