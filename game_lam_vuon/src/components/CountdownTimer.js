import React, { useEffect, useRef, useState } from 'react';

function CountdownTimer({ countdown_timer }) {
    const [time, setTime] = useState('00:00');
    const classRef = useRef('');

    // Start coundown-timer:
    useEffect(() => {
        if (countdown_timer > 0) {
            startCountdownTimer(countdown_timer);
        }
    }, [countdown_timer]);

    // Countdown timer:
    let startCountdownTimer = (inputSeconds) => {
        let minutes = Math.round(inputSeconds / 60);
        let seconds = inputSeconds - (minutes * 60);

        let timerID = setInterval(function () {
            seconds--;
            if (seconds < 0) {
                minutes--;
                seconds = 59;
            }

            if (minutes <= 0 && seconds <= 0) {
                classRef.current = '';
                clearInterval(timerID);
                setTime(() => {
                    return '00:00';
                });
            }
            else {
                // Update UI:
                classRef.current = ' show-timer';
                let m = minutes;
                let s = seconds;
                if (m < 10) {
                    m = "0" + m;
                }
                if (s < 10) {
                    s = "0" + s;
                }
                setTime(() => {
                    return `${m}:${s}`;
                });
            }
        }, 1000);
    }


    return (
        <div>
            <div className={"countdown-timer" + classRef}>{time}</div>
        </div>
    );
}

export default CountdownTimer;