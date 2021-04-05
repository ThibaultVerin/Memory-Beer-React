import React, { useState, useEffect, useContext } from "react";
import './Timer.scss'
import { TimeContext }  from '../../../contexts/TimeContext';


const Timer = ({ gameStarting, user, className }) => {

    const { setGameTime } = useContext(TimeContext);

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        setCounter(0);
    }, [])

    /*eslint-disable */
    useEffect(() => {
        let id;
        if (gameStarting === true) {
            id = setInterval(() => {
                setCounter(counter => counter + 1);
            }, 1000);
            setGameTime(counter)
        } else if (!gameStarting) {
            setGameTime(counter)
        }
        return () => clearInterval(id);
    }, [gameStarting]);
    /*eslint-enable */
    
    return (
        <div className={`counter-container-${className}`}>
            <h1>{user.name}: {counter}</h1>
        </div>
    )
}

export default Timer;