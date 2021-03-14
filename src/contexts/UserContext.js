import React, { useState, createContext } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState([{
        id: 1,
        name:''
    }])

    return (
        <UserContext.Provider value={{userInfo, setUserInfo}}>
            {children}
        </UserContext.Provider>
    )
}