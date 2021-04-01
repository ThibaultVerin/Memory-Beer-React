import React, { useState, useContext, useEffect } from 'react';
import { UserContext }  from '../../contexts/UserContext';
import { RankingArray } from '../../data/LocalData';
import './Ranking.scss';

const Ranking = () => {

    const { userInfo } = useContext(UserContext);

    const [sortedArray, setSortedArray] = useState(RankingArray);

    /*eslint-disable */
    useEffect(() => {
        setSortedArray(sortedArray => ([
            ...sortedArray, 
            userInfo
        ]))
    }, [])
    /*eslint-enable */

    sortedArray.sort(function (a, b) {
        //return a.score - b.score;
        return b.score - a.score;
    });

    console.log(sortedArray.includes(userInfo))

    return (
        <div className='ranking-container'>
            <table>
                <thead>
                    <tr>
                        <th colSpan="4">Hall of fame</th>
                     </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Position</td>
                        <td>Name</td>
                        <td>Score</td>
                        <td>Time</td>
                    </tr>
                    {sortedArray.map((user, index) => 
                        <tr key={index} className={user.name === userInfo.name ? 'user-ranking-row' : 'ranking-row'}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.score}</td>
                            <td>{user.time}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Ranking;