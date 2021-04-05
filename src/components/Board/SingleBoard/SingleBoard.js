import React, { useState, useContext, useEffect } from 'react';
import Board from '../Board/Board';
import { UserContext }  from '../../../contexts/UserContext';

const SingleBoard = () => {

    const { userInfo } = useContext(UserContext);

    return (
        <div>
            <Board user={userInfo}  />
        </div>
    )
}

export default SingleBoard;