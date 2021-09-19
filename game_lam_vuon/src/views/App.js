import React, { useCallback, useContext, useRef, useState } from 'react';
import MainSection from '../components/MainSection';
import MenuSection from '../components/MenuSection';
import ShopItem from '../components/ShopItem';
import ToolItem from '../components/ToolItem';
import UserBar from '../components/UserBar';

import toolImgs from '../services/tool.service';
import UserContext from '../store/contexts/UserContext';

function App() {
  const { name, imageString, money, setMoney, level } = useContext(UserContext);
  
  const [isSpadeActive, setIsSpadeActive] = useState(false);
  const [isBNetActive, setIsBNetActive] = useState(false);

  // Message box:
  const [isMessageShown, setIsMessageShown] = useState(false);
  const message = useRef('');

  const hideOrShowMessageBox = useCallback(() => {
    setIsMessageShown(!isMessageShown);
  }, [isMessageShown]);

  const showMessageBox = useCallback((msg) => {
    hideOrShowMessageBox();
    message.current = msg;
  }, [hideOrShowMessageBox]);


  // State to check if shop menu (seeds) is active:
  const [isMenuToggle, setIsMenuToggle] = useState(false);

  // State to check if shop menu (tools) is active:
  const [isMenuToggleTools, setIsMenuToggleTools] = useState(false);

  // The seeds you've just bought:
  const [bag, setBag] = useState([]);

  // Your tools in use:
  const [toolsInUse, setToolsInUse] = useState([]);

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
      timeToGrowUp: 5,
      timeFromLv1ToLv2: 15,
      timeFromLv2ToLv1: 10
    },
    {
      id: 1,
      name: 'Morning Glory',
      price_of_seeds: 20,
      price_of_plant: 30,
      img_forSeed: 'img_MorningGlory_Seeds',
      img_forPlant_lv1: 'img_Plant',
      img_forPlant_lv2: 'img_MorningGlory',
      timeToGrowUp: 15,
      timeFromLv1ToLv2: 30,
      timeFromLv2ToLv1: 25
    },
    {
      id: 2,
      name: 'Pansy',
      price_of_seeds: 30,
      price_of_plant: 40,
      img_forSeed: 'img_Pansy_Seeds',
      img_forPlant_lv1: 'img_Plant',
      img_forPlant_lv2: 'img_Pansy',
      timeToGrowUp: 30,
      timeFromLv1ToLv2: 50,
      timeFromLv2ToLv1: 15
    },
    {
      id: 3,
      name: 'Rose',
      price_of_seeds: 40,
      price_of_plant: 50,
      img_forSeed: 'img_Rose_Seeds',
      img_forPlant_lv1: 'img_Plant',
      img_forPlant_lv2: 'img_Rose',
      timeToGrowUp: 60,
      timeFromLv1ToLv2: 75,
      timeFromLv2ToLv1: 30
    },
    {
      id: 4,
      name: 'Sunflower',
      price_of_seeds: 50,
      price_of_plant: 60,
      img_forSeed: 'img_Sunflower_Seeds',
      img_forPlant_lv1: 'img_Plant',
      img_forPlant_lv2: 'img_Sunflower',
      timeToGrowUp: 75,
      timeFromLv1ToLv2: 90,
      timeFromLv2ToLv1: 60
    }]
  });

  const [tools, setTools] = useState(() => [
    {
      title: 'Spade',
      toolImg: toolImgs.img_Spade,
      quantity: 0,
      price: 0
    },
    {
      title: 'Butterfly Net',
      toolImg: toolImgs.img_ButterflyNet,
      quantity: 0,
      price: 0
    }
  ]);

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
      showMessageBox("Không đủ tiền!");
    }
  }

  const addToolToUse = (indexOfTool) => {
    let count = 0;
    let indexOfToolInUse = -1;
    for (let i = 0; i < toolsInUse.length; i++) {
      if (toolsInUse[i].title === tools[indexOfTool].title) {
        count++;
        indexOfToolInUse = i;
        break;
      }
    }
    if (count === 0) {
      setToolsInUse((prevState) => {
        let newItem = { ...tools[indexOfTool] };
        return [...prevState, newItem];
      });
      setTools((prevState) => {
        prevState[indexOfTool].quantity = 1;
        return prevState;
      });
      // Active btn:
      if (tools[indexOfTool].title === 'Spade') {
        setIsSpadeActive(true);
      }
      else {
        setIsBNetActive(true);
      }
    }
    else {
      setToolsInUse((prevState) => {
        if (indexOfToolInUse >= 0 && indexOfToolInUse < toolsInUse.length) {
          prevState.splice(indexOfToolInUse, 1);
        }
        return prevState;
      });
      setTools((prevState) => {
        prevState[indexOfTool].quantity = 0;
        return prevState;
      });
      // Active btn:
      if (tools[indexOfTool].title === 'Spade') {
        setIsSpadeActive(false);
      }
      else {
        setIsBNetActive(false);
      }
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
      <MainSection bag={bag} toolsInUse={toolsInUse} removeLastItemFromBag={removeLastItemFromBag} harvestAndSellPlant={harvestAndSellPlant} showMessageBox={showMessageBox}></MainSection>

      <MenuSection></MenuSection>

      {/* Seeds: */}
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
                  style={isMenuToggle ? {} : { display: "none" }}
                >
                  <ShopItem
                    price={object.price_of_seeds}
                    imageString={object.img_forSeed}
                    unit={"$"}
                  />
                </div>
              ))
            }
          </div>
        </div>
      </div>

      {/* Tools: */}
      <div className="shop-section" style={{ position: 'fixed', top: 80, left: 0 }}>
        <div className="shop-section-wrap">
          <button onClick={() => (setIsMenuToggleTools(!isMenuToggleTools))} type="button" className="toggle-shop">Tools</button>
          <div className={`seeds-section${isMenuToggleTools ? " active" : ""}`} >
            <div
              className={`seed-product${(tools[0].title === 'Spade' && isSpadeActive === true) ? " active" : ""}`}
              title={tools[0].title}
              key={0}
              onClick={() => { return addToolToUse(0); }}
              style={isMenuToggleTools ? { justifyContent: 'center', alignItems: 'center' } : { display: "none" }}
            >
              <ToolItem
                price={tools[0].price}
                image={tools[0].toolImg}
              />
            </div>
            <div
              className={`seed-product${(tools[1].title === 'Butterfly Net' && isBNetActive === true) ? " active" : ""}`}
              title={tools[1].title}
              key={1}
              onClick={() => { return addToolToUse(1); }}
              style={isMenuToggleTools ? { justifyContent: 'center', alignItems: 'center' } : { display: "none" }}
            >
              <ToolItem
                price={tools[1].price}
                image={tools[1].toolImg}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="user-section">
        <UserBar
          name={name}
          imageString={imageString}
          score={money}
          level={level}
        />
      </div>

      <input id="message-box-input" type="checkbox" name="message-box-input"
        checked={isMessageShown}
        onChange={hideOrShowMessageBox}>
      </input>
      <div className="message-box">
        <div className="message-section">
          <div className="message-title">Thông báo</div>
          <div className="message-content">{message.current}</div>
          <div className="message-btns">
            <label className="ok-btn" htmlFor="message-box-input">OK</label>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
