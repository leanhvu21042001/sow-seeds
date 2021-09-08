import React, { useState } from 'react';
import MainSection from '../components/MainSection';
import MenuSection from '../components/MenuSection';

function App() {
  // The seeds you've just bought:
  const [bag, setBag] = useState([]);

  // The seeds in your garden:
  // const [seeds, setSeeds] = useState([]);

  // Your money:
  const [money, setMoney] = useState(100);

  // Seed products in shop:
  const [seedProducts] = useState(() => {
    return [{
      id: 0,
      name: 'Eschscholzia',
      price_of_seeds: 10,
      price_of_plant: 20,
      img_forSeed: 'img_Eschscholzia_Seeds',
      img_forPlant_lv1: 'img_Plant',
      img_forPlant_lv2: 'img_Eschscholzia',
      timeToGrowUp: 3,
      timeFromLv1ToLv2: 5,
      timeFromLv2ToLv1: 5
    },
    {
      id: 1,
      name: 'Morning Glory',
      price_of_seeds: 20,
      price_of_plant: 30,
      img_forSeed: 'img_MorningGlory_Seeds',
      img_forPlant_lv1: 'img_Plant',
      img_forPlant_lv2: 'img_MorningGlory',
      timeToGrowUp: 3,
      timeFromLv1ToLv2: 5,
      timeFromLv2ToLv1: 5
    },
    {
      id: 2,
      name: 'Pansy',
      price_of_seeds: 30,
      price_of_plant: 40,
      img_forSeed: 'img_Pansy_Seeds',
      img_forPlant_lv1: 'img_Plant',
      img_forPlant_lv2: 'img_Pansy',
      timeToGrowUp: 3,
      timeFromLv1ToLv2: 5,
      timeFromLv2ToLv1: 5
    },
    {
      id: 3,
      name: 'Rose',
      price_of_seeds: 40,
      price_of_plant: 50,
      img_forSeed: 'img_Rose_Seeds',
      img_forPlant_lv1: 'img_Plant',
      img_forPlant_lv2: 'img_Rose',
      timeToGrowUp: 3,
      timeFromLv1ToLv2: 5,
      timeFromLv2ToLv1: 5
    },
    {
      id: 4,
      name: 'Sunflower',
      price_of_seeds: 50,
      price_of_plant: 60,
      img_forSeed: 'img_Sunflower_Seeds',
      img_forPlant_lv1: 'img_Plant',
      img_forPlant_lv2: 'img_Sunflower',
      timeToGrowUp: 5,
      timeFromLv1ToLv2: 8,
      timeFromLv2ToLv1: 10
    }]
  });



  // Methods:
  const buySeedProduct = (i) => {
    if (money >= seedProducts[i].price_of_seeds) {
      setMoney(() => { return money - seedProducts[i].price_of_seeds; });
      // Add new item to your bag:
      let newItem = { ...seedProducts[i] };
      setBag((prevState) => {
        return [...prevState, newItem];
      });
    }
    else {
      alert("Không đủ tiền!");
    }
  }


  /**
   * Planting or harvesting:
   * i: The position of a plant (from 0 to 35).
   */
  // const plantOrHarvest = (i) => {
  //   let count = 0;
  //   let indexOfSeedObject = -1;
  //   for (let j = 0; j < seeds.length; j++) {
  //     if (seeds[j].position === i && seeds[j].isDead === false) {
  //       count++;
  //       indexOfSeedObject = j;
  //       break;
  //     }
  //   }
  //   if (count === 0) {
  //     // 1. Planting:
  //     if (bag.length > 0) {
  //       let newSeed = { ...bag[bag.length - 1] };
  //       newSeed.numberOfHarvestTime = 0;
  //       newSeed.beAbleToHarvest = false;
  //       newSeed.currentState = 'seed';
  //       newSeed.position = i;
  //       newSeed.isDead = false;
  //       setSeeds((prevState) => {
  //         return [...prevState, newSeed];
  //       });
  //       setBag((prevState) => {
  //         prevState.pop();
  //         return [...prevState];
  //       });
  //       // doSeeding(i);
  //     }
  //     else {
  //       alert("Bạn phải mua hạt giống để gieo hạt!");
  //       return;
  //     }
  //   }
  //   else {
  //     // 2. Harvesting:
  //     if (seeds[indexOfSeedObject].currentState === 'plant_lv2') {
  //       if (seeds[indexOfSeedObject].beAbleToHarvest === true) {
  //         setSeeds((prevState) => {
  //           let arr = [...prevState];
  //           arr[indexOfSeedObject].beAbleToHarvest = false;
  //           return arr;
  //         });
  //         setMoney(() => { return money + seeds[indexOfSeedObject].price_of_plant; });
  //         alert("Đã thu hoạch!");
  //       }
  //       else {
  //         alert("Bạn đã thu hoạch cây này rồi!");
  //       }
  //     }
  //     else {
  //       alert("Phải chờ cây trưởng thành mới có thể thu hoạch!");
  //     }
  //   }
  // };



  // const switchBetweenLv1AndLv2 = useCallback((indexOfSeedObject) => {
  //   // Lv1 -> Lv2:
  //   setTimeout(() => {
  //     setSeeds((prevState) => {
  //       let arr = [...prevState];
  //       arr[indexOfSeedObject].numberOfHarvestTime++;
  //       arr[indexOfSeedObject].currentState = 'plant_lv2';
  //       arr[indexOfSeedObject].beAbleToHarvest = true;
  //       return arr;
  //     });

  //     // Lv2 -> Lv1:
  //     setTimeout(() => {
  //       if (seeds[indexOfSeedObject].numberOfHarvestTime < 3) {
  //         setSeeds((prevState) => {
  //           let arr = [...prevState];
  //           arr[indexOfSeedObject].currentState = 'plant_lv1';
  //           arr[indexOfSeedObject].beAbleToHarvest = false;
  //           return arr;
  //         });
  //         switchBetweenLv1AndLv2(indexOfSeedObject);
  //       }
  //       else {
  //         setSeeds((prevState) => {
  //           let arr = [...prevState];
  //           arr[indexOfSeedObject].isDead = true;
  //           arr[indexOfSeedObject].beAbleToHarvest = true;
  //           return arr;
  //         });
  //         return;
  //       }
  //     }, (seeds[indexOfSeedObject].timeFromLv2ToLv1 * 1000));

  //   }, (seeds[indexOfSeedObject].timeFromLv1ToLv2 * 1000));
  // }, [seeds]);



  // const plant = useCallback((indexOfSeedObject) => {
  //   setTimeout(() => {
  //     setSeeds((prevState) => {
  //       let arr = [...prevState];
  //       arr[indexOfSeedObject].currentState = 'plant_lv1';
  //       return arr;
  //     });
  //     switchBetweenLv1AndLv2(indexOfSeedObject);
  //   }, (seeds[indexOfSeedObject].timeToGrowUp * 1000));
  // }, [seeds, switchBetweenLv1AndLv2]);


  const removeLastItemFromBag = () => {
    setBag((prevState) => {
      let newBag = [ ...prevState ];
      newBag.pop();
      return newBag;
    });
  }


  // Component:
  return (
    <div className="game-section">
      <MainSection bag={bag} removeLastItemFromBag={removeLastItemFromBag}></MainSection>
      <MenuSection></MenuSection>

      <div className="shop-section" style={{ position: 'fixed', top: 0, left: 0 }}>
        <div className="seeds-section">
          {
            seedProducts.map((object, i) => {
              return <div className="seed-product" key={i} onClick={() => { return buySeedProduct(i); }}>{object.name}</div>
            })
          }
        </div>
      </div>

      <div className="info-section" style={{ position: 'fixed', right: 0, top: 0 }}>
        <div className="money">${money}</div>
        <div className="level">Level 0</div>
      </div>
    </div>
  );
}

export default App;
