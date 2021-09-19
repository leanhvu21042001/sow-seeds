import React, { useState } from 'react';
import Plant from './Plant';

function Plot({ position, bag, toolsInUse, removeLastItemFromBag, harvestAndSellPlant, showMessageBox, sound_glimmer, sound_zigzag, sound_flash }) {
    // Choose which type of seed to plant:
    const [seedName, setSeedName] = useState('');

    // Count the number of plants in this plot:
    const [numerOfPlants, setNumerOfPlants] = useState(0);

    const setPlantName = (nameOfSeed) => {
        setSeedName(() => {
            return nameOfSeed;
        });
    }

    const addOrRemovePlant = (number) => {
        if (number === 1) {
            setNumerOfPlants((prevState) => { return prevState + 1; });
        }
        else if (number === -1) {
            setNumerOfPlants((prevState) => { return prevState - 1; });
        }
    }

    return (
        <div className="plot">
            <Plant position={(position * 6) + 0} bag={bag} toolsInUse={toolsInUse} removeLastItemFromBag={removeLastItemFromBag} harvestAndSellPlant={harvestAndSellPlant} seedName={seedName} numerOfPlants={numerOfPlants} setPlantName={setPlantName} addOrRemovePlant={addOrRemovePlant} showMessageBox={showMessageBox} sound_glimmer={sound_glimmer} sound_zigzag={sound_zigzag} sound_flash={sound_flash}></Plant>
            <Plant position={(position * 6) + 1} bag={bag} toolsInUse={toolsInUse} removeLastItemFromBag={removeLastItemFromBag} harvestAndSellPlant={harvestAndSellPlant} seedName={seedName} numerOfPlants={numerOfPlants} setPlantName={setPlantName} addOrRemovePlant={addOrRemovePlant} showMessageBox={showMessageBox} sound_glimmer={sound_glimmer} sound_zigzag={sound_zigzag} sound_flash={sound_flash}></Plant>
            <Plant position={(position * 6) + 2} bag={bag} toolsInUse={toolsInUse} removeLastItemFromBag={removeLastItemFromBag} harvestAndSellPlant={harvestAndSellPlant} seedName={seedName} numerOfPlants={numerOfPlants} setPlantName={setPlantName} addOrRemovePlant={addOrRemovePlant} showMessageBox={showMessageBox} sound_glimmer={sound_glimmer} sound_zigzag={sound_zigzag} sound_flash={sound_flash}></Plant>
            <Plant position={(position * 6) + 3} bag={bag} toolsInUse={toolsInUse} removeLastItemFromBag={removeLastItemFromBag} harvestAndSellPlant={harvestAndSellPlant} seedName={seedName} numerOfPlants={numerOfPlants} setPlantName={setPlantName} addOrRemovePlant={addOrRemovePlant} showMessageBox={showMessageBox} sound_glimmer={sound_glimmer} sound_zigzag={sound_zigzag} sound_flash={sound_flash}></Plant>
            <Plant position={(position * 6) + 4} bag={bag} toolsInUse={toolsInUse} removeLastItemFromBag={removeLastItemFromBag} harvestAndSellPlant={harvestAndSellPlant} seedName={seedName} numerOfPlants={numerOfPlants} setPlantName={setPlantName} addOrRemovePlant={addOrRemovePlant} showMessageBox={showMessageBox} sound_glimmer={sound_glimmer} sound_zigzag={sound_zigzag} sound_flash={sound_flash}></Plant>
            <Plant position={(position * 6) + 5} bag={bag} toolsInUse={toolsInUse} removeLastItemFromBag={removeLastItemFromBag} harvestAndSellPlant={harvestAndSellPlant} seedName={seedName} numerOfPlants={numerOfPlants} setPlantName={setPlantName} addOrRemovePlant={addOrRemovePlant} showMessageBox={showMessageBox} sound_glimmer={sound_glimmer} sound_zigzag={sound_zigzag} sound_flash={sound_flash}></Plant>
        </div>
    );
}

export default Plot;