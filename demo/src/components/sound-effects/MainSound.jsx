import React, { useState } from 'react'
import useSound from 'use-sound';
import './checkbox.css'
import sounds from './sounds.wav';

function MainSound() {
  const [play] = useSound(sounds, {
    sprite: {
      in: [500, 1000],
      out: [1500, 2000],
    }
  });
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="checkbox__sound-wrapper">
      <div>
        <label htmlFor="checkbox__sound"
          style={{ cursor: 'pointer' }}>Click Me!</label>
        <input
          id="checkbox__sound"
          type="checkbox"
          value={isChecked}
          onClick={() => {
            setIsChecked(!isChecked);
            play({ id: isChecked ? "in" : "out" });
          }}
        />
      </div>
    </div>
  )
}

export default MainSound