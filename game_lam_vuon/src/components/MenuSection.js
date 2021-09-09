import TabsSection from './TabsSection';

function MenuSection() {
    return (
        <div>
            <input id="menu-btn-input" type="checkbox" name="menu-btn-input"></input>
            <label className="menu-section-overlay" htmlFor="menu-btn-input"></label>
            <div className="menu-section">
                <div className="menu-top">
                    <label className="menu-btn" htmlFor="menu-btn-input">MENU</label>
                </div>
                <div className="menu-content">
                    <TabsSection></TabsSection>
                </div>
            </div>
        </div>
    );
}

export default MenuSection;