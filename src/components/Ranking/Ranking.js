import React, { useContext } from 'react';
import { UserContext }  from '../../contexts/UserContext';
import './Ranking.scss';

const Ranking = () => {

    const { userInfo } = useContext(UserContext);

    const rankingArray = [
        {
            position: 1,
            name:'Guy Mauve',
            score: 780,
            time: '2:01'
        },
        {
            position: 3,
            name:'Chen Zen',
            score: 740,
            time: '2:08'
        },
        {
            position: 2,
            name:'Sam Soule',
            score: 760,
            time: '2:06'
        },
        {
            position: 5,
            name:'Neta Miaou',
            score: 710,
            time: '2:15'
        },
        {
            position: 6,
            name:'Mr Jean',
            score: 700,
            time: '2:18'
        },
        {
            position: 4,
            name:'Noel Flantier',
            score: 720,
            time: '2:11'
        },
        {
            position: 7,
            name:'Tobias Beecher',
            score: 680,
            time: '2:26'
        },
        {
            position: 9,
            name:'Philly Flingo',
            score: 620,
            time: '2:41'
        },
        {
            position: 8,
            name:'Rico',
            score: 640,
            time: '2:39'
        },
        {
            position: 11,
            name:'Peluche',
            score: 580,
            time: '2:55'
        },
        {
            position: 10,
            name:'Jean Bon',
            score: 600,
            time: '2:59'
        }
    ];

    const sortByScore = rankingArray;

        sortByScore.sort(function (a, b) {
        return a.position - b.position;
      });


    console.log(rankingArray);

    return (
        <div>
            <h1>Top Score</h1>
            <div>
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
        </div>
    )
}

export default Ranking;