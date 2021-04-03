import React, { useState, createContext } from 'react';

export const TimeContext = createContext();

export const TimeProvider = ({ children }) => {
    
    const [gameTime, setGameTime ] = useState();

    return (
        <TimeContext.Provider value={{ gameTime, setGameTime }}>
            {children}
        </TimeContext.Provider>
    )
}