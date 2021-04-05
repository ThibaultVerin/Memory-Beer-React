import React, { useState, createContext } from 'react';

export const NumberPlayerContext = createContext();

export const NumberPlayerProvider = ({ children }) => {
    const [numberPlayer, setNumberPlayer ] = useState()

    return (
        <NumberPlayerContext.Provider value={{ numberPlayer, setNumberPlayer }}>
            {children}
        </NumberPlayerContext.Provider>
    )
}