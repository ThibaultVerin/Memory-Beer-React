import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import './SingleBoard.scss';
import { UserContext }  from '../../contexts/UserContext';
import { BeerCards } from '../../data/LocalData';
import logo from '../../data/pictures/Logo.png';

const SingleBoard = () => {

    const history = useHistory();

    const { userInfo } = useContext(UserContext);

    const [sortedBeerCards, setSortedBeerCards] = useState([]);
    const [playerScore, setPlayerScore] = useState(0);
    const [playerFirstChoice, setPlayerFirstChoice] = useState();
    const [playerSecondChoice, setPlayerSecondChoice] = useState();
    const [bothChoices, setBothChoices] = useState(false);
    const [match, setMatch] = useState(false);
    const [cardOpen, setCardOpen] = useState(false);

    const [className, setClassName] = useState('single-board-card-close')

    useEffect(() => {
        SortedCards();
    }, []);

    useEffect(() => {
        matchingResult();
    }, [bothChoices]);

    // useEffect(() => {
    //     handleClassName();
    // }, [playerFirstChoice]);

    const SortedCards = () => {
        const numberBottle = BeerCards.length;
        const newBeerCards = BeerCards;

        for (let i=0; i<numberBottle; i++) {
            newBeerCards.push(BeerCards[i]);
        }
        setSortedBeerCards(newBeerCards); 
     }

    const handleClassName = (index) => {
        console.log(index)
        if (cardOpen === true) {
            console.log(playerFirstChoice)
            setClassName('single-board-card-open');
        }
     }

    const handleClick = (card, index) => {
        setCardOpen(!cardOpen);
        if (!playerFirstChoice) {
            setPlayerFirstChoice(card);
        } else {
            setPlayerSecondChoice(card);
            setBothChoices(!bothChoices);
        }
        handleClassName(index);
    }

    const matchingResult = () => {
        if (playerFirstChoice !== undefined && playerSecondChoice !== undefined) {
            if (playerFirstChoice.id === playerSecondChoice.id) {
                setMatch(true);
                setPlayerScore(playerScore + 10);
            } else {
                setPlayerScore(playerScore - 10);
            }
            setPlayerFirstChoice();
            setPlayerSecondChoice();
        }
        setMatch(false);
    }


    return (
        <div className='single-board-container'>
            {userInfo.name} : {playerScore}
            <div className='single-board-card-container'>
                {sortedBeerCards.map((card, index) => 
                    <div className={cardOpen && (index  === playerFirstChoice.id - 1) ? 'single-board-card-open' : 'single-board-card-close'} key ={index} onClick={() => handleClick(card, index)}>
                        <img src={card.src} alt={card.name} id={card.id} />
                        <img src={logo} alt ='logo' />
                    </div>
                )}
            </div>
        </div>
    )
}

export default SingleBoard;