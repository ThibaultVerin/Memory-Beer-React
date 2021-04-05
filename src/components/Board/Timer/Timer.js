import React, { useState, useEffect, useContext } from "react";
import { TimeContext }  from '../../../contexts/TimeContext';


const Timer = ({ gameFinished, user }) => {

    const { gameTime, setGameTime } = useContext(TimeContext);

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        setCounter(0);
    }, [])

    useEffect(() => {
        let id;
        if (gameFinished) {
            id = setInterval(() => {
                setCounter(counter => counter + 1);
            }, 1000);
            setGameTime(counter)
        } else if (!gameFinished) {
            setGameTime(counter)
        }
        return () => clearInterval(id);
    }, [gameFinished]);
    
    return (
        <>
            <h1>: {counter}</h1>
        </>
    )
}

export default Timer;