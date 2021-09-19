import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import UserContext from "../contexts/UserContext";
import userImage from './../../services/user.service'

const UserProvider = ({ children }) => {

  const history = useHistory();

  // props
  const [name, setName] = useState("Trần Giả Trân");
  const [imageString, setImageString] = useState(userImage);
  const [money, setMoney] = useState(100);
  const [level, setLevel] = useState(0);
  const [lastLoginTime, setLastLoginTime] = useState();
  const [numberOfHavestTimes, setNumberOfHavestTimes] = useState(0);

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

  const logout = () => {
    localStorage.removeItem("uid")
    history.push('/login');
  }

  // data-passing
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
    , logout
  };

  return (
    <UserContext.Provider value={data}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;