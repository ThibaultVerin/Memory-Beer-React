import React, { useState, useEffect, useContext } from "react";
import { TimeContext }  from '../../../contexts/TimeContext';


const Timer = ({ gameFinished }) => {

    const { setGameTime } = useContext(TimeContext);

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        let id;
        if (gameFinished) {
            id = setInterval(() => {
                setCounter(counter => counter + 1);
            }, 1000);
        } else if (!gameFinished) {
            setGameTime(counter)
            setCounter(0);
        }
        return () => clearInterval(id);
    }, [gameFinished]);
    
    return (
        <>
            <h1>Time: {counter}</h1>
        </>
    )
}

export default Timer;