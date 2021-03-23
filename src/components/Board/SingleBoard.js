import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import './SingleBoard.scss';
import { UserContext }  from '../../contexts/UserContext';
import { BeerCards } from '../../data/LocalData';
import SingleBeerCards from './SingleBeerCards';


const SingleBoard = () => {

    const history = useHistory();

    const { userInfo } = useContext(UserContext);

    const [sortedBeerCards, setSortedBeerCards] = useState([]);
    const [playerScore, setPlayerScore] = useState(0);


    const [cardOpen, setCardOpen] = useState(false);
    const [playerFirstChoice, setPlayerFirstChoice] = useState();
    const [playerSecondChoice, setPlayerSecondChoice] = useState();

    const [classname, setClassname] = useState('single-board-card-close')
    const [cardClicked, setCardClicked] = useState();

   

    useEffect(() => {
        SortedCards();
    }, []);
    

    const SortedCards = () => {
        const numberBottle = BeerCards.length;
        const newBeerCards = BeerCards;

        for (let i=0; i<numberBottle; i++) {
            newBeerCards.push({
                id: numberBottle + i,
                name: BeerCards[i].name,
                src: BeerCards[i].src
            });
        }
        setSortedBeerCards(newBeerCards);
        shuffleArray(newBeerCards);
     }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const handleClick = (card) => {
        setCardClicked(card.id);
        setCardOpen(!cardOpen);
        handleClassname(card.id);
        if (!playerFirstChoice) {
            setPlayerFirstChoice(card.id);
            console.log(`FirstCard : ${card.id}`);
        } else {
            setPlayerSecondChoice(card.id);
            console.log(`SecondCard : ${card.id}`);
        }
    }

    const handleClassname = (id) => {
        console.log(id);
        console.log(cardClicked);
        if (cardOpen === true) {
            setClassname('single-board-card-open');
        } else {
            setClassname('single-board-card-close');
        }
    }


    return (
        <div className='single-board-container'>
            {userInfo.name} : {playerScore}
            <div className='single-board-card-container'>
                {sortedBeerCards.map((card) => 
                    <SingleBeerCards key ={card.id} card={card} classname={classname} cardClicked={cardClicked} handleClick={handleClick} />
                )}
            </div>
        </div>
    )
}

export default SingleBoard;