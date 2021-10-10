import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router';

export default function Login() {
  const history = useHistory();
  const [name, setName] = useState("");
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

  useEffect(() => {
    const name = localStorage.getItem('uid');
    if (name !== null) setName(name);
  }, []);

  const handleOnEnter = (event) => {
    if (event.code === "Enter") handleClickButton();
  }

  const handleClickButton = () => handleSubmit();

  const handleSubmit = () => {
    if (name === "") {
      showMessageBox("Vui lòng nhập tên");
      return;
    }
    localStorage.setItem('uid', name);
    history.push('/');
  }

  return (
    <div className="login">
      <div className="login-box-title">Welcome to Gardening Game!</div>
      <input
        defaultValue={name}
        onKeyDown={(e) => handleOnEnter(e)}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name" className="login__name" autoFocus />
      <button
        onClick={() => { handleClickButton() }}
        type="submit" className="login__confirm">Confirm!</button>

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
  )
}
