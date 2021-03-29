import { BeerCards } from '../../../data/LocalData';

export const sortedBeerCards = BeerCards;

const SortedCards = () => {
    const numberBottle = BeerCards.length;
    
    for (let i=0; i<numberBottle; i++) {
        sortedBeerCards.push({
            id: i + 1,
            name: BeerCards[i].name,
            src: BeerCards[i].src
        });
    }
}

const ShuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

SortedCards();
ShuffleArray(sortedBeerCards);