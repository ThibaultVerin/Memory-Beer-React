import React, { useState, useContext, createContext } from 'react';

export const NumberUserContext = createContext();

export const NumberUserProvider = ({ children }) => {
    const [numberUserInfo, setNumberUserInfo] = useState(2)

    return (
        <NumberUserContext.Provider value={{numberUserInfo, setNumberUserInfo}}>
            {children}
        </NumberUserContext.Provider>
    )
}