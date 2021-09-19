import React from "react";

function SettingSection({ isAudioMuted, setIsAudioMuted, onChange_SoundSlider,
    isPausedBGM, bgmVolume, setIsPausedBGM, stopBGM, setBgmVolume }) {

    return (
        <div className="setting-section">
            <div className="bgmSetting-section">
                <div className="bgmSetting-title">Background music:</div>
                <div className="bgmSetting-controls">
                    <div className="bgmSetting-btns">
                        <div
                            role="button"
                            onClick={() => {
                                return setIsPausedBGM(!isPausedBGM);
                            }}
                            className="bgmSetting-btn" id="btn-PlayPause_bgMusic">
                            {isPausedBGM ? 'Play' : 'Pause'}
                        </div>
                        <div
                            role="button"
                            onClick={() => {
                                return stopBGM();
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
                            defaultValue={`${bgmVolume * 100}`}
                            onChange={({ target }) => {
                                return setBgmVolume(target.value / 100);
                            }}
                            type="range" />
                    </div>
                </div>
            </div>
            <div className="soundSetting-section">
                <div className="soundSetting-title">Sound:</div>
                <div className="soundSetting-controls">
                    <div className="soundSetting-btns">
                        <div
                            onClick={() => {
                                setIsAudioMuted(!isAudioMuted)
                            }}
                            className="soundSetting-btn" id="btn-MuteUnmute_sound">
                            {isAudioMuted ? "Unmute" : "Mute"}
                        </div>
                    </div>
                    <div className="soundSetting-slider">
                        <div className="slider-name">Volume:</div>
                        <input
                            onChange={e => onChange_SoundSlider(e)}
                            type="range" name="soundVolume-input" id="soundVolume-input" className="volume-slider" min="0" max="100" defaultValue="100"></input>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SettingSection;