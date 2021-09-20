import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
export default function Login() {
  const history = useHistory();
  const [name, setName] = useState("");

  useEffect(() => {
    const name = localStorage.getItem('uid');
    if (name !== null) setName(name);
  }, []);

  const handleOnEnter = (event) => {
    if (event.code === "Enter") handleClickButton();
  }

  const handleClickButton = () => handleSubmit();

  const handleSubmit = () => {
    if (name === "") return;
    localStorage.setItem('uid', name);
    history.push('/');
  }

  return (
    <div className="login">
      <input
        defaultValue={name}
        onKeyDown={(e) => handleOnEnter(e)}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name" className="login__name" />
      <button
        onClick={() => { handleClickButton() }}
        type="submit" className="login__confirm">Confirm!</button>
    </div>
  )
}
