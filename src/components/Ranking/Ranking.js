import React, { useState, useContext, useEffect } from 'react';
import { UserContext }  from '../../contexts/UserContext';
import { RankingArray } from '../../data/LocalData';
import './Ranking.scss';

const Ranking = () => {

    const { userInfo } = useContext(UserContext);

    const [sortedArray, setSortedArray] = useState(RankingArray);


        /*eslint-disable */
        useEffect(() => {
            setSortedArray(sortedArray => ({
                ...sortedArray, userInfo
            }))
        }, [])
        /*eslint-enable */


    // const sortByScore = sortedArray;

    //     sortByScore.sort(function (a, b) {
    //     return a.position - b.position;
    //   });


    //console.log(sortByScore);
    // console.log(userInfo);
    console.log(sortedArray);
    console.log(sortedArray[1]);

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
                    {RankingArray.map((user, index) => 
                        <tr key={index}>
                            <td>{user.position}</td>
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