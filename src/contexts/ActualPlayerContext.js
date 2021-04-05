import React, { useState, createContext } from 'react';

export const ActualPlayerContext = createContext();

export const ActualPlayerProvider = ({ children }) => {
    const [actualPlayer, setActualPlayer] = useState(1);

    return (
        <ActualPlayerContext.Provider value={{ actualPlayer, setActualPlayer }}>
            {children}
        </ActualPlayerContext.Provider>
    )
}