import React, { useEffect, useRef, useState } from 'react';

function CountdownTimer({ timer_value }) {
    const [time, setTime] = useState('00:00');
    const classRef = useRef('');

    // Start coundown-timer:
    useEffect(() => {
        // console.log(`CountdownTimer useEffect() is called! (timer_value = ${timer_value})`);

        let intervalID;
        if (timer_value > 0) {
            classRef.current = ' show-timer';

            // Set up timer:
            let minutes = Math.floor(timer_value / 60);
            let seconds = timer_value - (minutes * 60);

            // Run timer:
            intervalID = setInterval(function () {
                seconds--;
                if (seconds < 0) {
                    minutes--;
                    seconds = 59;
                }

                if (minutes === 0 && seconds === 0) {
                    setTime(() => {
                        return `00:00`;
                    });
                    clearInterval(intervalID);
                }
                else {
                    setTime(() => {
                        let m = '';
                        let s = '';
                        if (minutes < 10) { m = '0'; }
                        if (seconds < 10) { s = '0'; }
                        return `${m}${minutes}:${s}${seconds}`;
                    });
                }
            }, 1000);
        }
        else {
            classRef.current = '';
        }
        return () => {
            clearInterval(intervalID);
        };
    }, [timer_value]);

    return (
        <div className={"countdown-timer" + classRef.current}>{time}</div>
    );
}

export default CountdownTimer;