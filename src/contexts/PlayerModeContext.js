import React, { useState, createContext } from 'react';

export const PlayerModeContext = createContext();

export const PlayerModeProvider = ({ children }) => {
    const [playerMode, setPlayerMode] = useState()

    return (
        <PlayerModeContext.Provider value={{playerMode, setPlayerMode}}>
            {children}
        </PlayerModeContext.Provider>
    )
}