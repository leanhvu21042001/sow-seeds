import { useState } from 'react';
import { singleSound } from '../services/sounds.service';
import TabsSection from './TabsSection';

function MenuSection() {
    const [pop_1] = useState(new Audio(singleSound.pop_1));

    const [isMutePop, setIsMutePop] = useState(false);
    const handleClickBtnMenu = () => {
        if (isMutePop === false) {
            pop_1.play();
        }
    }
    const handleChangeInputRangeMusicPop = ({ target }) => pop_1.volume = target.value / 100;

    return (
        <div>
            <input id="menu-btn-input" type="checkbox" name="menu-btn-input"></input>
            <label className="menu-section-overlay" htmlFor="menu-btn-input"></label>
            <div className="menu-section">
                <div className="menu-top">
                    <label
                        onClick={() => { handleClickBtnMenu() }}
                        className="menu-btn" htmlFor="menu-btn-input">MENU</label>
                </div>
                <div className="menu-content">
                    <TabsSection
                        handleChangeInputRangeMusicPop={handleChangeInputRangeMusicPop}
                        setIsMutePop={setIsMutePop}
                        isMutePop={isMutePop}
                    ></TabsSection>
                </div>
            </div>
        </div>
    );
}

export default MenuSection;