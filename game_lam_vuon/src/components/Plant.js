import React, { useCallback, useEffect, useState } from 'react';

function Plant({ position, bag, removeLastItemFromBag }) {
    const [seed, setSeed] = useState({});
    const [img_class, setImgClass] = useState('');
    const [img_src, setImgSrc] = useState('');
    const [plantBtn_src, setplantBtnSrc] = useState('./images/Garden/Tools/seeding.png');

    const doSeeding = () => {
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

    const switchBetweenLv1AndLv2 = useCallback(() => {
        // Lv1 -> Lv2:
        setTimeout(() => {
            setSeed((prevState) => {
                let obj = { ...prevState };
                obj.numberOfHarvestTime++;
                obj.beAbleToHarvest = true;
                obj.currentState = 'plant_lv2';
                return obj;
            });

            // Lv2 -> Lv1:
            setTimeout(() => {
                if (seed.numberOfHarvestTime < 3) {
                    setSeed((prevState) => {
                        let obj = { ...prevState };
                        obj.beAbleToHarvest = false;
                        obj.currentState = 'plant_lv1';
                        return obj;
                    });
                    switchBetweenLv1AndLv2();
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

        }, (seed.timeFromLv1ToLv2 * 1000));
    }, [seed]);

    const setSeedGrowing = useCallback(() => {
        setTimeout(() => {
            setSeed((prevState) => {
                let obj = { ...prevState };
                obj.currentState = 'plant_lv1';
                return obj;
            });
            switchBetweenLv1AndLv2();
        }, (seed.timeToGrowUp * 1000));
    }, [seed, switchBetweenLv1AndLv2]);

    useEffect(() => {
        console.log('This component is re-rendered!');
        console.log(seed);
        if (seed.currentState === 'seed') {
            setImgClass(' seed-img');
            setImgSrc(`./images/Garden/Seeds/${seed.img_forSeed}`);
            setplantBtnSrc('./images/Garden/Tools/spade.png');
            setSeedGrowing();
        }
        else if (seed.currentState === 'plant_lv1') {
            setImgClass(' plant-img');
            setImgSrc(`./images/Garden/Plants/${seed.img_forPlant_lv1}`);
            setplantBtnSrc('./images/Garden/Tools/spade.png');
        }
        else if (seed.currentState === 'plant_lv2') {
            setImgClass(' plant-img');
            setImgSrc(`./images/Garden/Flowers/${seed.img_forPlant_lv2}`);
            setplantBtnSrc('./images/Garden/Tools/spade.png');
        }
        else {
            setImgClass('');
            setImgSrc('');
            setplantBtnSrc('./images/Garden/Tools/seeding.png');
        }
    }, [seed, setSeedGrowing]);

    return (
        <div className="plant">
            <img className={"seed-or-plant" + img_class} src={img_src} alt=""></img>
            <div className="plant-btn" onClick={() => { return doSeeding(); }}>
                <img className="plant-btn-img" src={plantBtn_src} alt="plant-btn-img"></img>
            </div>
            <div className="countdown-timer">00:00</div>
        </div>
    );
}

export default Plant;