import React, { useState, createContext } from 'react';

export const LevelContext = createContext();

export const LevelProvider = ({ children }) => {
    const [levelSelected, setLevelSelected ] = useState();

    return (
        <LevelContext.Provider value={{ levelSelected, setLevelSelected }}>
            {children}
        </LevelContext.Provider>
    )
}