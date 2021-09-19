import Plot from './Plot';

function MainSection({ bag, toolsInUse, removeLastItemFromBag, harvestAndSellPlant, showMessageBox, sound_glimmer, sound_zigzag, sound_flash }) {
    return (
        <div className="main-section">
            <div className="garden">
                <div className="garden-plots">
                    <Plot position={0} bag={bag} toolsInUse={toolsInUse} removeLastItemFromBag={removeLastItemFromBag} harvestAndSellPlant={harvestAndSellPlant} showMessageBox={showMessageBox} sound_glimmer={sound_glimmer} sound_zigzag={sound_zigzag} sound_flash={sound_flash}></Plot>
                    <Plot position={1} bag={bag} toolsInUse={toolsInUse} removeLastItemFromBag={removeLastItemFromBag} harvestAndSellPlant={harvestAndSellPlant} showMessageBox={showMessageBox} sound_glimmer={sound_glimmer} sound_zigzag={sound_zigzag} sound_flash={sound_flash}></Plot>
                    <Plot position={2} bag={bag} toolsInUse={toolsInUse} removeLastItemFromBag={removeLastItemFromBag} harvestAndSellPlant={harvestAndSellPlant} showMessageBox={showMessageBox} sound_glimmer={sound_glimmer} sound_zigzag={sound_zigzag} sound_flash={sound_flash}></Plot>
                    <Plot position={3} bag={bag} toolsInUse={toolsInUse} removeLastItemFromBag={removeLastItemFromBag} harvestAndSellPlant={harvestAndSellPlant} showMessageBox={showMessageBox} sound_glimmer={sound_glimmer} sound_zigzag={sound_zigzag} sound_flash={sound_flash}></Plot>
                    <Plot position={4} bag={bag} toolsInUse={toolsInUse} removeLastItemFromBag={removeLastItemFromBag} harvestAndSellPlant={harvestAndSellPlant} showMessageBox={showMessageBox} sound_glimmer={sound_glimmer} sound_zigzag={sound_zigzag} sound_flash={sound_flash}></Plot>
                    <Plot position={5} bag={bag} toolsInUse={toolsInUse} removeLastItemFromBag={removeLastItemFromBag} harvestAndSellPlant={harvestAndSellPlant} showMessageBox={showMessageBox} sound_glimmer={sound_glimmer} sound_zigzag={sound_zigzag} sound_flash={sound_flash}></Plot>
                </div>
            </div>
        </div>
    );
}

export default MainSection;