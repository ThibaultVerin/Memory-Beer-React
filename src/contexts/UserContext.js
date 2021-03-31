import React, { createContext } from 'react';
import useLocalStorage from '../services/useLocalStorage'

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useLocalStorage('userInfo', []);

    return (
        <UserContext.Provider value={{userInfo, setUserInfo}}>
            {children}
        </UserContext.Provider>
    )
}