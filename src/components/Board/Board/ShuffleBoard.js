import React, { useState, useEffect } from 'react';
import { BeerCardsArray } from '../../../data/LocalData';

export const sortedBeerCards = BeerCardsArray;

const SortedCards = () => {
    const numberBottle = BeerCardsArray.length;
        
    for (let i=0; i<numberBottle; i++) {
        sortedBeerCards.push({
            id: i + 1,
            name: BeerCardsArray[i].name,
            src: BeerCardsArray[i].src
        });
    }
}
    
export default function ShuffleArray (array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
SortedCards();
console.log(sortedBeerCards);

