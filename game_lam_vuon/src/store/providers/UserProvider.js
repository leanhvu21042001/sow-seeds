import React, { useState } from 'react'

import UserContext from "../contexts/UserContext";

const UserProvider = ({ children }) => {

  // props
  const [name, setName] = useState("Trần Giả Trân");
  const [imageString, setImageString] = useState(null);
  const [money, setMoney] = useState(0);
  const [level, setLevel] = useState(0);
  // Functions

  
  const data = {
    name,
    imageString,
    money,
    level,
  };

  return (
    <UserContext.Provider value={data}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;