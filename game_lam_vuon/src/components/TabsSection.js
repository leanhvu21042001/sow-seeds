import ProfileSection from './ProfileSection';
import SettingSection from './SettingSection';
import AboutSection from './AboutSection';

function TabsSection({ isAudioMuted, setIsAudioMuted, onChange_SoundSlider,
    isPausedBGM, bgmVolume, setIsPausedBGM, stopBGM, setBgmVolume }) {

    return (
        <div className="tabs-section">
            <input id="tab-1" className="tab-input" type="radio" name="tab-btn-input" defaultChecked></input>
            <label className="tab-btn" htmlFor="tab-1">Profile</label>
            <div className="tab">
                <div className="tab-content">
                    <ProfileSection></ProfileSection>
                </div>
            </div>

            <input id="tab-2" className="tab-input" type="radio" name="tab-btn-input"></input>
            <label className="tab-btn" htmlFor="tab-2">Settings</label>
            <div className="tab">
                <div className="tab-content">
                    <SettingSection
                        isAudioMuted={isAudioMuted}
                        setIsAudioMuted={setIsAudioMuted}
                        onChange_SoundSlider={onChange_SoundSlider}
                        isPausedBGM={isPausedBGM}
                        bgmVolume={bgmVolume}
                        setIsPausedBGM={setIsPausedBGM}
                        stopBGM={stopBGM}
                        setBgmVolume={setBgmVolume}
                    ></SettingSection>
                </div>
            </div>

            <input id="tab-3" className="tab-input" type="radio" name="tab-btn-input"></input>
            <label className="tab-btn" htmlFor="tab-3">About</label>
            <div className="tab">
                <div className="tab-content">
                    <AboutSection></AboutSection>
                </div>
            </div>
        </div>
    );
}

export default TabsSection;