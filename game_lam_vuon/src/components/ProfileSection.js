import { useContext, useEffect, useState } from 'react';
import UserContext from '../store/contexts/UserContext';

function ProfileSection() {
    const { name, imageString, money, level, numberOfHavestTimes, levelStages_ByHarvestTime, logout } = useContext(UserContext);
    const [levelFiller, setLevelFiller] = useState('0%');

    useEffect(() => {
        if (level !== 'MAX') {
            if (level > 0) {
                let prevNum = (levelStages_ByHarvestTime.current[level - 1]);
                let currentNum = levelStages_ByHarvestTime.current[level];
                let maxValue = currentNum - prevNum;
                let currentValue = numberOfHavestTimes - prevNum;
                // console.log(((currentValue / maxValue) * 100) + '%');
                setLevelFiller(() => {
                    return ((currentValue / maxValue) * 100) + '%';
                })
            }
            else {
                setLevelFiller(() => {
                    return ((numberOfHavestTimes / levelStages_ByHarvestTime.current[level]) * 100) + '%';
                });
            }
        }
    }, [level, numberOfHavestTimes, levelStages_ByHarvestTime]);

    return (
        <div className="profile-section">
            <div className="left-section">
                <div className="user-img-wrapper">
                    <img className="user-img" alt="user-img" draggable="false" src={imageString}></img>
                </div>
                <div className="user-name">{name}</div>
                <div className="user-level-wrapper">
                    <div className="user-level">
                        <div className="level-filler"
                            style={{ width: levelFiller }}
                        >
                        </div>
                        <div className="level-text">Level {level}</div>
                    </div>
                </div>
                <div className="user-money-wrapper">
                    <div className="user-money">
                        <div className="money-text">$ {money}</div>
                    </div>
                </div>
                <a
                    onClick={() => { logout() }}
                    className="sign-out-btn" href="/">Sign out</a>
            </div>

            <div className="right-section">
                <div className="user-info-wrapper">
                    <div className="user-info">
                        <span className="info-title">Last login time:</span>
                        <span className="info-detail">Aug 31, 2021</span>
                    </div>
                    <div className="user-info">
                        <span className="info-title">Number of harvest times:</span>
                        <span className="info-detail">{numberOfHavestTimes}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileSection;