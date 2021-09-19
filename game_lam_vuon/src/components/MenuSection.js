import { useEffect, useRef, useState } from 'react';
import { backgroundMusic } from '../services/sound.service';
import TabsSection from './TabsSection';

function MenuSection({ isAudioMuted, setIsAudioMuted, sound_pop_1, onChange_SoundSlider }) {
    // 1.1. Background music:
    const [bgMusic] = useState(new Audio(backgroundMusic.ThePianoGuys_RachelPlatten_ThisIsYourFightSong));

    // 1.2. Background music - Check if bgMusic is played/paused or stopped:
    const bgmIsNeverPlayed = useRef(true);
    const [isPausedBGM, setIsPausedBGM] = useState(true);
    const [bgmVolume, setBgmVolume] = useState(0.3);

    // 1.3. Background music - Handle events:
    const onClick_MenuOverlay = () => {
        if (bgmIsNeverPlayed.current === true) {
            bgmIsNeverPlayed.current = false;
            setIsPausedBGM(false);
        }
    }

    const stopBGM = () => {
        setIsPausedBGM(true);
        bgMusic.currentTime = 0;
    }


    // 2.1. Audio:
    const onClick_MenuBtn = () => {
        onClick_MenuOverlay();
        sound_pop_1.current.play();
    }


    // 3. Component is rendered:
    useEffect(() => {
        bgMusic.volume = bgmVolume;
        bgMusic.loop = true;
    }, [bgMusic, bgmVolume]);

    useEffect(() => {
        if (isPausedBGM === true) {
            bgMusic.pause();
        }
        else {
            bgMusic.play();
        }
    }, [bgMusic, isPausedBGM]);

    useEffect(() => {
        if (isAudioMuted === true) {
            sound_pop_1.current.muted = true;
        }
        else {
            sound_pop_1.current.muted = false;
        }
    })


    // 4. Component:
    return (
        <div>
            <input id="menu-btn-input" type="checkbox" name="menu-btn-input" defaultChecked></input>
            <label className="menu-section-overlay" htmlFor="menu-btn-input" onClick={onClick_MenuOverlay}></label>
            <div className="menu-section">
                <div className="menu-top">
                    <label
                        onClick={() => { onClick_MenuBtn(); }}
                        className="menu-btn" htmlFor="menu-btn-input">MENU</label>
                </div>
                <div className="menu-content">
                    <TabsSection
                        isAudioMuted={isAudioMuted}
                        setIsAudioMuted={setIsAudioMuted}
                        onChange_SoundSlider={onChange_SoundSlider}
                        isPausedBGM={isPausedBGM}
                        bgmVolume={bgmVolume}
                        setIsPausedBGM={setIsPausedBGM}
                        stopBGM={stopBGM}
                        setBgmVolume={setBgmVolume}
                    ></TabsSection>
                </div>
            </div>
        </div>
    );
}

export default MenuSection;