import React, { useEffect, useRef, useState } from 'react';

function CountdownTimer({ timer_value }) {
    const [time, setTime] = useState('00:00');
    const classRef = useRef('');
    const isTimerEnabled = useRef(false);

    // Countdown timer:
    const startCountdownTimer = ((inputSeconds) => {
        let minutes = Math.floor(inputSeconds / 60);
        let seconds = inputSeconds - (minutes * 60);

        let timerID = setInterval(function () {
            seconds--;
            if (seconds < 0) {
                minutes--;
                seconds = 59;
            }

            if (minutes > 0 || seconds > 0) {
                setTime(() => {
                    let m = '';
                    let s = '';
                    if (m < 10) { m = '0'; }
                    if (s < 10) { s = '0'; }
                    return `${m}${minutes}:${s}${seconds}`;
                });
                classRef.current = ' show-timer';
            }
            else {
                setTime(() => {
                    return `00:00`;
                });
                classRef.current = '';
                isTimerEnabled.current = false;
                clearInterval(timerID);
            }
        }, 1000);
    });

    // Start coundown-timer:
    useEffect(() => {
        if (isTimerEnabled.current === false && timer_value > 0) {
            isTimerEnabled.current = true;
            startCountdownTimer(timer_value);
        }
        else {
            // Do nothing!
        }
    }, [timer_value, startCountdownTimer]);

    return (
        <div className={"countdown-timer" + classRef}>{time}</div>
    );
}

export default CountdownTimer;