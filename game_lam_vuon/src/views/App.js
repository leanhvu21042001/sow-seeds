import React, { useState } from 'react';
import MainSection from '../components/MainSection';
import MenuSection from '../components/MenuSection';
import SeedItem from '../components/SeedItem';
import UserBar from '../components/UserBar';
import userImage from './../services/user.service'
function App() {

  // state to check shop menu is active
  const [isMenuToggle, setIsMenuToggle] = useState(false);
  
  // The seeds you've just bought:
  const [bag, setBag] = useState([]);

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

  const removeLastItemFromBag = () => {
    setBag((prevState) => {
      let newBag = [...prevState];
      newBag.pop();
      return newBag;
    });
  }

  const harvestAndSellPlant = (price_of_plant) => {
    setMoney(() => {
      return money + price_of_plant;
    });
  }


  // Component:
  return (
    <div className="game-section">
      <MainSection bag={bag} removeLastItemFromBag={removeLastItemFromBag} harvestAndSellPlant={harvestAndSellPlant}></MainSection>
      <MenuSection></MenuSection>

      <div className="shop-section" style={{ position: 'fixed', top: 0, left: 0 }}>
        <div className="shop-section-wrap">
          <button onClick={() => (setIsMenuToggle(!isMenuToggle))} type="button" className="toggle-shop">Seeds</button>
          <div className={`seeds-section${isMenuToggle ? " active" : ""}`}>
            {
              seedProducts.map((object, i) => (
                <div className="seed-product"
                  title={object.name}
                  key={i}
                  onClick={() => { return buySeedProduct(i); }}
                >
                  <SeedItem
                    price={object.price_of_seeds}
                    imageString={object.img_forSeed}
                    unit={" $ "}
                  />
                </div>
              ))
            }
          </div>
        </div>
      </div>
      
      <div className="user-section">
        <UserBar
          name={"username"}
          imageString={userImage}
          score={money}
          level={"0"}
        />
      </div>

      {/* <div className="info-section" style={{ position: 'fixed', right: 0, top: 0 }}>
        <div className="money">${money}</div>
        <div className="level">Level 0</div>
      </div> */}

    </div>
  );
}

export default App;
