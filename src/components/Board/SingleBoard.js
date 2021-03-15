import React, { useContext, useState } from 'react';
import { useHistory } from "react-router-dom";
import './SingleBoard.scss';
import { UserContext }  from '../../contexts/UserContext';

const SingleBoard = () => {

    const history = useHistory();

    const { userInfo } = useContext(UserContext);

    //const [userPoint, setUserPoint] = useState(0);

    return (
        <div>
            {userInfo.id}
        </div>
    )
}

export default SingleBoard;