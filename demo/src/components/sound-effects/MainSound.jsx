import React, { useEffect, useState } from 'react'
import Vexento from './Vexento-Spark.mp3';
function MainSound() {

  const [bgSound] = useState(new Audio(Vexento));
  const [isPlayOrPause, setIsPlayOrPause] = useState(false);
  const [isStop, setIsStop] = useState(false);

  useEffect(() => {
    if (isPlayOrPause === true) {
      bgSound.volume = 0.25;
      bgSound.loop = true;
      bgSound.play();
      setIsStop(false);
    } else {
      bgSound.pause();
    }
  }, [isPlayOrPause]);

  useEffect(() => {
    if (isStop === true) {
      bgSound.pause();
      bgSound.currentTime = 0;
      setIsPlayOrPause(false);
    }
  }, [isStop]);

  const handleChangeVolume = (event) => {
    bgSound.volume = event.target.value / 100;
  }
  return (
    <div className="checkbox__sound-wrapper">
      <button
        type="button"
        style={{ padding: "10px", fontSize: "1.5rem" }}
        onClick={() => {
          setIsPlayOrPause(!isPlayOrPause);
        }}
      >
        {isPlayOrPause ? 'pause' : 'play'}
      </button>
      <button
        type="button"
        style={{ padding: "10px", fontSize: "1.5rem" }}
        onClick={() => {
          setIsStop(!isStop);
        }}
      >
        Stop
      </button>
      <input
        min={0}
        max={100}
        defaultValue={25}
        onChange={(event) => { handleChangeVolume(event) }}
        type="range" />
    </div>
  )
}

export default MainSound