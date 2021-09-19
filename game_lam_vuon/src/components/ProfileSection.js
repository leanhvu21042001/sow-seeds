import img_user from '../assets/images/User/user.jpg';

function ProfileSection({ money }) {
    return (
        <div className="profile-section">
            <div className="left-section">
                <div className="user-img-wrapper">
                    <img className="user-img" alt="user-img" draggable="false" src={img_user}></img>
                </div>
                <div className="user-name">Trần Giả Trân</div>
                <div className="user-level-wrapper">
                    <div className="user-level">
                        <div className="level-filler"></div>
                        <div className="level-text">Level 0</div>
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