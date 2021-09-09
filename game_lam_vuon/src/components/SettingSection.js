import { useEffect, useState } from "react";
import { backgroundMusics } from "./../services/sounds.service";
function SettingSection() {

    const [bgSound] = useState(new Audio(backgroundMusics.Vexento));
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
        <div className="setting-section">
            <div className="bgmSetting-section">
                <div className="bgmSetting-title">Background music:</div>
                <div className="bgmSetting-controls">
                    <div className="bgmSetting-btns">
                        <div
                            role="button"
                            onClick={() => {
                                setIsPlayOrPause(!isPlayOrPause);
                            }}
                            className="bgmSetting-btn" id="btn-PlayPause_bgMusic">
                            {isPlayOrPause ? 'Pause' : 'Play'}
                        </div>
                        <div
                            role="button"
                            onClick={() => {
                                setIsStop(!isStop);
                            }}
                            className="bgmSetting-btn"
                            id="btn-Stop_bgMusic">
                            Stop
                        </div>
                    </div>
                    <div className="bgmSetting-slider">
                        <div className="slider-name">Volume:</div>

                        <input
                            name="bgMusicVolume-input" id="bgMusicVolume-input" className="volume-slider"
                            min={0}
                            max={100}
                            defaultValue={25}
                            onChange={(event) => { handleChangeVolume(event) }}
                            type="range" />
                    </div>
                </div>
            </div>
            <div className="soundSetting-section">
                <div className="soundSetting-title">Sound:</div>
                <div className="soundSetting-controls">
                    <div className="soundSetting-btns">
                        <div className="soundSetting-btn" id="btn-MuteUnmute_sound">Mute</div>
                    </div>
                    <div className="soundSetting-slider">
                        <div className="slider-name">Volume:</div>
                        <input type="range" name="soundVolume-input" id="soundVolume-input" className="volume-slider" min="0" max="100" defaultValue="100"></input>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SettingSection;