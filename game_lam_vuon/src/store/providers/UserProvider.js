import React, { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom';
import UserContext from "../contexts/UserContext";
import userImage from './../../services/user.service'

const UserProvider = ({ children }) => {

  const history = useHistory();

  // Props:
  const [name, setName] = useState("Anonymous User");
  const [imageString, setImageString] = useState(userImage);
  const [money, setMoney] = useState(100);

  const levelStages_ByHarvestTime = useRef([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
  const [numberOfHavestTimes, setNumberOfHavestTimes] = useState(0);
  const [level, setLevel] = useState(0);

  const [lastLoginTime, setLastLoginTime] = useState();


  // Log in:
  useEffect(() => {
    const uid = localStorage.getItem("uid");
    if (uid === null) {
      localStorage.removeItem("uid")
      history.push('/login');
      return;
    } else {
      setName(uid);
    }

  }, [history]);


  // Level:
  useEffect(() => {
    // 1. Nếu ở cấp cuối và lớn hơn điều kiện cần để vượt cấp này, thì thành cấp MAX.
    // 2. Nếu không phải cấp cuối, cho phép lên cấp.
    if (level === levelStages_ByHarvestTime.current.length - 1) {
      if (numberOfHavestTimes === levelStages_ByHarvestTime.current[level]) {
        setLevel('MAX');
      }
    }
    else if (level < levelStages_ByHarvestTime.current.length - 1) {
      if (numberOfHavestTimes === levelStages_ByHarvestTime.current[level]) {
        setLevel((prevState) => {
          return prevState + 1;
        });
      }
    }
  }, [numberOfHavestTimes, level]);


  // Log out:
  const logout = () => {
    localStorage.removeItem("uid")
    history.push('/login');
  }


  // Passing data:
  const data = {
    name
    , setName
    , imageString
    , setImageString
    , money
    , setMoney
    , level
    , setLevel
    , numberOfHavestTimes
    , setNumberOfHavestTimes
    , levelStages_ByHarvestTime
    , lastLoginTime
    , setLastLoginTime
    , logout
  };

  // Render:
  return (
    <UserContext.Provider value={data}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;