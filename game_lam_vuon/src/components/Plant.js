import React, { useCallback, useEffect, useRef, useState } from 'react';
import flowerImgs from './../services/flower.service';
import plantImgs from './../services/plant.service';
import seedImgs from './../services/seed.service';
import toolImgs from './../services/tool.service';
import animalImgs from './../services/animal.service';
import CountdownTimer from './CountdownTimer';

function Plant({ position, bag, toolsInUse, removeLastItemFromBag, harvestAndSellPlant, seedName, numerOfPlants, setPlantName, addOrRemovePlant, showMessageBox }) {
    const [seed, setSeed] = useState({});
    const [img_class, setImgClass] = useState('');
    const [img_src, setImgSrc] = useState('');
    const [plantBtn_src, setplantBtnSrc] = useState(toolImgs.img_Seeding);
    const count_harvesting = useRef(0);
    const timer_value = useRef(0);
    const timeoutID = useRef(0);
    const [isAnimalAppeared, setIsAnimalAppeared] = useState(false);
    const animalImgName = useRef('');

    // Start to seed:
    const doSeeding = () => {
        if (bag.length > 0) {
            // Nếu chưa có cây nào trong luống hoặc có rồi và muốn trồng đúng loại thuộc luống đó, thì cho phép trồng:
            if ((numerOfPlants === 0) || (seedName === bag[bag.length - 1].name)) {
                setPlantName(bag[bag.length - 1].name);
                addOrRemovePlant(1);
                setSeed(() => {
                    let arr = [...bag];
                    let item = arr[arr.length - 1];
                    item.numberOfHarvestTime = 0;
                    item.beAbleToHarvest = false;
                    item.currentState = 'seed';
                    item.position = position;
                    item.isDead = false;
                    removeLastItemFromBag();
                    return item;
                });
            }
            else {
                showMessageBox('LƯU Ý: Một luống đất chỉ được trồng một loại cây!');
                // alert('LƯU Ý: Một luống đất chỉ được trồng một loại cây!');
            }
        }
        else {
            showMessageBox('Bạn phải mua hạt giống để gieo hạt!');
            // alert("Bạn phải mua hạt giống để gieo hạt!");
            return;
        }
    }


    // Lv2 -> Lv1:
    const switchFromLv2ToLv1 = useCallback(() => {
        timeoutID.current = setTimeout(() => {
            timer_value.current = 0;

            if (seed.numberOfHarvestTime < 3) {
                if (count_harvesting.current < seed.numberOfHarvestTime) {
                    count_harvesting.current = seed.numberOfHarvestTime;
                }
                setSeed((prevState) => {
                    let obj = { ...prevState };
                    obj.beAbleToHarvest = false;
                    obj.currentState = 'plant_lv1';
                    return obj;
                });
            }
            else {
                count_harvesting.current = 0;
                setSeed((prevState) => {
                    let obj = { ...prevState };
                    obj.isDead = true;
                    obj.beAbleToHarvest = false;
                    obj.currentState = 'dead';
                    return obj;
                });
                addOrRemovePlant(-1);
            }
        }, (seed.timeFromLv2ToLv1 * 1000));

        // eslint-disable-next-line
    }, [seed.numberOfHarvestTime, seed.timeFromLv2ToLv1]);


    // Lv1 -> Lv2:
    const switchFromLv1ToLv2 = useCallback(() => {
        timeoutID.current = setTimeout(() => {
            timer_value.current = 0;

            setSeed((prevState) => {
                let obj = { ...prevState };
                obj.numberOfHarvestTime++;
                obj.beAbleToHarvest = true;
                obj.currentState = 'plant_lv2';
                return obj;
            });
        }, (seed.timeFromLv1ToLv2 * 1000));
    }, [seed.timeFromLv1ToLv2]);


    // Up to level 1:
    const setSeedGrowing = useCallback(() => {
        timeoutID.current = setTimeout(() => {
            timer_value.current = 0;

            setSeed((prevState) => {
                let obj = { ...prevState };
                obj.currentState = 'plant_lv1';
                return obj;
            });
        }, (seed.timeToGrowUp * 1000));
    }, [seed.timeToGrowUp]);


    // Check seed and set states:
    useEffect(() => {
        // console.log( {1: seed.beAbleToHarvest, 2: seed.currentState} );
        if (seed.currentState === 'seed') {
            setImgClass(' seed-img');
            setImgSrc(seedImgs[seed.img_forSeed]);
            setplantBtnSrc(toolImgs.img_WickerBasket);
            // Change state:
            timer_value.current = seed.timeToGrowUp;
            setSeedGrowing();
        }
        else if (seed.currentState === 'plant_lv1') {
            setImgClass(' plant-img');
            setImgSrc(plantImgs[seed.img_forPlant_lv1]);
            setplantBtnSrc(toolImgs.img_WickerBasket);
            // Change state:
            timer_value.current = seed.timeFromLv1ToLv2;
            switchFromLv1ToLv2();
        }
        else if (seed.currentState === 'plant_lv2') {
            setImgClass(' plant-img');
            setImgSrc(flowerImgs[seed.img_forPlant_lv2]);
            setplantBtnSrc(toolImgs.img_WickerBasket);
            // Change state:
            timer_value.current = seed.timeFromLv2ToLv1;
            switchFromLv2ToLv1();
        }
        else {
            setImgClass('');
            setImgSrc('');
            setplantBtnSrc(toolImgs.img_Seeding);
            timer_value.current = 0;
        }
    }, [seed, setSeedGrowing, switchFromLv1ToLv2, switchFromLv2ToLv1]);


    // Harvest:
    const doHarvesting = useCallback(() => {
        if (seed.currentState === 'plant_lv2') {
            if (seed.beAbleToHarvest === true && count_harvesting.current < seed.numberOfHarvestTime) {
                count_harvesting.current = count_harvesting.current + 1;
                harvestAndSellPlant(seed.price_of_plant);
                
                if (isAnimalAppeared === true) {
                    showMessageBox(`Đã thu hoạch! Bạn nhận được $${seed.price_of_plant - (0.5 * seed.price_of_plant)}.\n(Đã giảm $${(0.5 * seed.price_of_plant)} do sâu bọ!)`);
                }
                else {
                    showMessageBox(`Đã thu hoạch! Bạn nhận được $${seed.price_of_plant}.`);
                }
                
                // Change image after harvesting:
                // setImgSrc(plantImgs[seed.img_forPlant_lv1]);
                clearTimeout(timeoutID.current);
                if (seed.numberOfHarvestTime < 3) {
                    setSeed((prevState) => {
                        let obj = { ...prevState };
                        obj.beAbleToHarvest = false;
                        obj.currentState = 'plant_lv1';
                        return obj;
                    });
                }
                else {
                    count_harvesting.current = 0;
                    setSeed((prevState) => {
                        let obj = { ...prevState };
                        obj.isDead = true;
                        obj.beAbleToHarvest = false;
                        obj.currentState = 'dead';
                        return obj;
                    });
                    addOrRemovePlant(-1);
                }
            }
            else {
                showMessageBox('Bạn đã thu hoạch cây này rồi!');
                // alert("Bạn đã thu hoạch cây này rồi!");
            }
        }
        else {
            showMessageBox('Phải chờ cây trưởng thành mới có thể thu hoạch!');
            // alert("Phải chờ cây trưởng thành mới có thể thu hoạch!");
        }
    }, [harvestAndSellPlant, seed, showMessageBox, addOrRemovePlant]);


    // Click plant-btn:
    const onClick_PlantBtn = (e) => {
        e.stopPropagation();
        if (img_class === '') {
            return doSeeding();
        }
        else {
            return doHarvesting();
        }
    };

    // Click on the ground:
    const onClick_ground = (e) => {
        e.stopPropagation();
        if (toolsInUse.length > 0) {
            for (let i = 0; i < toolsInUse.length; i++) {
                if (toolsInUse[i].title === 'Spade') {
                    clearTimeout(timeoutID.current);
                    timer_value.current = 0;
                    count_harvesting.current = 0;
                    setSeed({});
                    if (numerOfPlants > 0 && img_src !== '') {
                        addOrRemovePlant(-1);
                    }
                }
            }
        }
    }

    // Click on the animal:
    const onClick_animal = (e) => {
        e.stopPropagation();
        if (toolsInUse.length > 0) {
            for (let i = 0; i < toolsInUse.length; i++) {
                if (toolsInUse[i].title === 'Butterfly Net') {
                    setIsAnimalAppeared(false);
                    animalImgName.current = '';
                }
            }
        }
    }

    useEffect(() => {
        if (img_class === ' plant-img') {
            setIsAnimalAppeared(true);
            // Set animalImgName:
            if (animalImgName.current === '') {
                let randomAnimalIndex = Math.floor(Math.random() * 6);
                let index = 0;
                for (const key in animalImgs) {
                    if (index === randomAnimalIndex) {
                        animalImgName.current = key;
                        break;
                    }
                    index++;
                }
            }
        }
        else {
            setIsAnimalAppeared(false);
        }
    }, [img_class]);

    const renderAnimalComponent = () => {
        if (isAnimalAppeared === true) {
            return (
                <div className="animal">
                    <img className="animal-img"
                        src={animalImgs[animalImgName.current]} alt="animal-btn-img"
                        onClick={(e) => { return onClick_animal(e); }}>
                    </img>
                </div>
            )
        }
    }

    return (
        <div className="plant" onClick={(e) => { return onClick_ground(e); }}>
            {/* {console.log( {1: seed.beAbleToHarvest, 2: seed.currentState, 3: timer_value.current})} */}
            <img className={"seed-or-plant" + img_class} src={img_src} alt=""></img>
            <div className="plant-btn" onClick={(e) => { return onClick_PlantBtn(e); }}>
                <img className="plant-btn-img" src={plantBtn_src} alt="plant-btn-img"></img>
            </div>
            <CountdownTimer timer_value={timer_value.current}></CountdownTimer>
            {renderAnimalComponent()}
        </div>
    );
}

export default Plant;