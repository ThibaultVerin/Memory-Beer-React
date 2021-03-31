import React, { useContext } from 'react';
import { UserContext }  from '../../contexts/UserContext';
import { RankingArray } from '../../data/LocalData';
import './Ranking.scss';

const Ranking = () => {

    const { userInfo } = useContext(UserContext);


    const sortByScore = RankingArray;

        sortByScore.sort(function (a, b) {
        return a.position - b.position;
      });


    console.log(RankingArray);

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
                    {sortByScore.map((user, index) => 
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