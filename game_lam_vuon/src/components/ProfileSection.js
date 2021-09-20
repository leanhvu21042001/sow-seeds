import { useEffect, useState } from 'react';
import img_user from '../assets/images/User/user.jpg';

function ProfileSection({ money, currentLevel, numberOfHarvestingTime, levelStages_ByHarvestingTime }) {
    const [levelFiller, setLevelFiller] = useState('0%');

    useEffect(() => {
        if (currentLevel !== 'MAX') {
            if (currentLevel > 0) {
                let prevNum = (levelStages_ByHarvestingTime.current[currentLevel - 1]);
                let currentNum = levelStages_ByHarvestingTime.current[currentLevel];
                let maxValue = currentNum - prevNum;
                let currentValue = numberOfHarvestingTime - prevNum;
                console.log(((currentValue / maxValue) * 100) + '%');
                setLevelFiller(() => {
                    return ((currentValue / maxValue) * 100) + '%';
                })
            }
            else {
                setLevelFiller(() => {
                    return ((numberOfHarvestingTime / levelStages_ByHarvestingTime.current[currentLevel]) * 100) + '%';
                });
            }
        }
    }, [currentLevel, numberOfHarvestingTime, levelStages_ByHarvestingTime]);

    return (
        <div className="profile-section">
            <div className="left-section">
                <div className="user-img-wrapper">
                    <img className="user-img" alt="user-img" draggable="false" src={img_user}></img>
                </div>
                <div className="user-name">Trần Giả Trân</div>
                <div className="user-level-wrapper">
                    <div className="user-level">
                        <div className="level-filler" style={{width:levelFiller}}></div>
                        <div className="level-text">Level {currentLevel}</div>
                    </div>
                </div>
                <div className="user-money-wrapper">
                    <div className="user-money">
                        <div className="money-text">$ {money}</div>
                    </div>
                </div>
                <a className="sign-out-btn" href="/">Sign out</a>
            </div>

            <div className="right-section">
                <div className="user-info-wrapper">
                    <div className="user-info">
                        <span className="info-title">Last login time:</span>
                        <span className="info-detail">Aug 31, 2021</span>
                    </div>
                    <div className="user-info">
                        <span className="info-title">Number of harvest times:</span>
                        <span className="info-detail">0</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileSection;