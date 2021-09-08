import React, { useCallback, useEffect, useState } from 'react';
import flowerImgs from './../services/flower.service';
import plantImgs from './../services/plant.service';
import seedImgs from './../services/seed.service';
import toolImgs from './../services/tool.service';

function Plant({ position, bag, removeLastItemFromBag, harvestAndSellPlant }) {
    const [seed, setSeed] = useState({});
    const [img_class, setImgClass] = useState('');
    const [img_src, setImgSrc] = useState('');
    const [plantBtn_src, setplantBtnSrc] = useState(toolImgs.img_Seeding);

    // Start to seed:
    const doSeeding = () => {
        if (bag.length > 0) {
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
            alert("Bạn phải mua hạt giống để gieo hạt!");
            return;
        }
    }


    // Lv2 -> Lv1:
    const switchFromLv2ToLv1 = useCallback(() => {
        setTimeout(() => {
            if (seed.numberOfHarvestTime < 3) {
                setSeed((prevState) => {
                    let obj = { ...prevState };
                    obj.beAbleToHarvest = false;
                    obj.currentState = 'plant_lv1';
                    return obj;
                });
            }
            else {
                setSeed((prevState) => {
                    let obj = { ...prevState };
                    obj.isDead = true;
                    obj.beAbleToHarvest = false;
                    obj.currentState = 'dead';
                    return obj;
                });
            }
        }, (seed.timeFromLv2ToLv1 * 1000));
    }, [seed.numberOfHarvestTime, seed.timeFromLv2ToLv1]);


    // Lv1 -> Lv2:
    const switchFromLv1ToLv2 = useCallback(() => {
        setTimeout(() => {
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
        setTimeout(() => {
            setSeed((prevState) => {
                let obj = { ...prevState };
                obj.currentState = 'plant_lv1';
                return obj;
            });
        }, (seed.timeToGrowUp * 1000));
    }, [seed.timeToGrowUp]);


    // Check seed and set states:
    useEffect(() => {
        console.log( {1: seed.beAbleToHarvest, 2: seed.currentState} );
        if (seed.currentState === 'seed') {
            setImgClass(' seed-img');
            setImgSrc(seedImgs[seed.img_forSeed]);
            setplantBtnSrc(toolImgs.img_Spade);
            setSeedGrowing();
        }
        else if (seed.currentState === 'plant_lv1') {
            setImgClass(' plant-img');
            setImgSrc(plantImgs[seed.img_forPlant_lv1]);
            setplantBtnSrc(toolImgs.img_Spade);
            switchFromLv1ToLv2();
        }
        else if (seed.currentState === 'plant_lv2') {
            setImgClass(' plant-img');
            setImgSrc(flowerImgs[seed.img_forPlant_lv2]);
            setplantBtnSrc(toolImgs.img_Spade);
            switchFromLv2ToLv1();
        }
        else {
            setImgClass('');
            setImgSrc('');
            setplantBtnSrc(toolImgs.img_Seeding);
        }
    }, [seed, setSeedGrowing, switchFromLv1ToLv2, switchFromLv2ToLv1]);


    // Harvest:
    const doHarvesting = () => {
        if (seed.currentState === 'plant_lv2') {
            if (seed.beAbleToHarvest === true) {
                // harvestAndSellPlant(seed.price_of_plant);
                setSeed((prevState) => {
                    let obj = { ...prevState };
                    obj.beAbleToHarvest = false;
                    return obj;
                });
                alert("Đã thu hoạch!");
            }
            else {
                alert("Bạn đã thu hoạch cây này rồi!");
            }
        }
        else {
            alert("Phải chờ cây trưởng thành mới có thể thu hoạch!");
        }
    };


    // Click plant-btn:
    const onClick_PlantBtn = () => {
        if (img_class === '') {
            return doSeeding();
        }
        else {
            return doHarvesting();
        }
    };

    return (
        <div className="plant">
            <img className={"seed-or-plant" + img_class} src={img_src} alt=""></img>
            <div className="plant-btn" onClick={() => { return onClick_PlantBtn(); }}>
                <img className="plant-btn-img" src={plantBtn_src} alt="plant-btn-img"></img>
            </div>
            <div className="countdown-timer">00:00</div>
        </div>
    );
}

export default Plant;