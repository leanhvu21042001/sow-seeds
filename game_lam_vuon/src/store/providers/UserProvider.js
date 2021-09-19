import React, { useState } from 'react'
import UserContext from "../contexts/UserContext";
import userImage from './../../services/user.service'
const UserProvider = ({ children }) => {

  // props
  const [name, setName] = useState("Trần Giả Trân");
  const [imageString, setImageString] = useState(userImage);
  const [money, setMoney] = useState(100);
  const [level, setLevel] = useState(0);
  const [lastLoginTime, setLastLoginTime] = useState();
  const [numberOfHavestTimes, setNumberOfHavestTimes] = useState(0);
  // Functions


  const data = {
    name
    , setName
    , imageString
    , setImageString
    , money
    , setMoney
    , level
    , setLevel
    , lastLoginTime
    , setLastLoginTime
    , numberOfHavestTimes
    , setNumberOfHavestTimes
  };

  return (
    <UserContext.Provider value={data}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;