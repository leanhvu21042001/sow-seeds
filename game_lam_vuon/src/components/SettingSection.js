
function SettingSection() {
    return (
        <div className="setting-section">
            <div className="bgmSetting-section">
                <div className="bgmSetting-title">Background music:</div>
                <div className="bgmSetting-controls">
                    <div className="bgmSetting-btns">
                        <div className="bgmSetting-btn" id="btn-PlayPause_bgMusic">Play</div>
                        <div className="bgmSetting-btn" id="btn-Stop_bgMusic">Stop</div>
                    </div>
                    <div className="bgmSetting-slider">
                        <div className="slider-name">Volume:</div>
                        <input type="range" name="bgMusicVolume-input" id="bgMusicVolume-input" className="volume-slider" min="0" max="100" defaultValue="100"></input>
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