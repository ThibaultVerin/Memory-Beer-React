import React, { useState, useEffect, useContext } from "react";
import './Timer.scss'
import { TimeContext }  from '../../../contexts/TimeContext';


const Timer = ({ gameStarting, user, className }) => {

    const { setGameTime } = useContext(TimeContext);

    const [time, setTime] = useState({
        second: '00',
        minute: '00',
        counter: 0
    })

    useEffect(() => {
        setTime({
            second: '00',
            minute: '00',
            counter: 0
        });
    }, [])

    /*eslint-disable */
    useEffect(() => {
        let id;
        if (gameStarting === true) {
            id = setInterval(() => {
                const secondCounter = time.counter % 60;
                const minuteCounter = Math.floor(time.counter / 60);
        
                const computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}`: secondCounter;
                const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}`: minuteCounter;
                
                setTime(prevState => ({ 
                    second: computedSecond,
                    minute: computedMinute,
                    counter: prevState.counter + 1
                }))
            }, 1000);
            setGameTime(time)
        } else if (!gameStarting) {
            setGameTime(time)
        }
        return () => clearInterval(id);
    }, [gameStarting, time]);
    /*eslint-enable */
    
    return (
        <div className={`counter-container-${className}`}>
            <h1>{user.name} :</h1>
            <h1>{time.minute} : {time.second}</h1>
        </div>
    )
}

export default Timer;