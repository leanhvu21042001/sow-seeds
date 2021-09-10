import { useEffect, useState } from "react";
import { backgroundMusics } from "./../services/sounds.service";

function SettingSection({ setIsMutePop, isMutePop, handleChangeInputRangeMusicPop }) {

    const [bgSound] = useState(new Audio(backgroundMusics.Vexento));
    const [isPause, setIsPause] = useState(false);
    const [isStop, setIsStop] = useState(false);
    const [volume, setVolume] = useState(0.25);

    // chạy khi bắt đầu hiện game
    useEffect(() => {
        bgSound.volume = 0.25;
        bgSound.loop = true;
        bgSound.play();
    }, []);

    // thay đổi volumn audio
    useEffect(() => {
        bgSound.volume = volume;
    }, [volume]);


    // thay đổi isPlayOrPause từ sự kiện click, sẽ thay đổi play hoặc pause audio.
    useEffect(() => {
        if (isPause === true) {
            bgSound.pause();
        } else {
            if (volume === 0) {
                bgSound.volume = 0;
                bgSound.currentTime = bgSound.currentTime - 1;
            }
            bgSound.play();
        }
    }, [isPause]);

    // dừng âm thannh khi isStop là true
    useEffect(() => {
        if (isStop === true) {
            bgSound.pause();
            bgSound.currentTime = 0;
            setIsPause(true);
        }
    }, [isStop]);

    return (
        <div className="setting-section">
            <div className="bgmSetting-section">
                <div className="bgmSetting-title">Background music:</div>
                <div className="bgmSetting-controls">
                    <div className="bgmSetting-btns">
                        <div
                            role="button"
                            onClick={() => {
                                setIsPause(!isPause);
                            }}
                            className="bgmSetting-btn" id="btn-PlayPause_bgMusic">
                            {isPause ? 'Play' : 'Pause'}
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
                            onChange={({ target }) => { setVolume(target.value / 100) }}
                            type="range" />
                    </div>
                </div>
            </div>
            <div className="soundSetting-section">
                <div className="soundSetting-title">Sound:</div>
                <div className="soundSetting-controls">
                    <div className="soundSetting-btns">
                        <div
                            onClick={() => { setIsMutePop(!isMutePop) }}
                            className="soundSetting-btn" id="btn-MuteUnmute_sound">
                            {isMutePop ? "Unmute" : "Mute"}
                        </div>
                    </div>
                    <div className="soundSetting-slider">
                        <div className="slider-name">Volume:</div>
                        <input
                            onChange={e => handleChangeInputRangeMusicPop(e)}
                            type="range" name="soundVolume-input" id="soundVolume-input" className="volume-slider" min="0" max="100" defaultValue="100"></input>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SettingSection;