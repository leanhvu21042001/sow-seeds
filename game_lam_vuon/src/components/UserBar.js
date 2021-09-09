import React from 'react'

export default function UserBar(props) {
  const { imageString, name, score, level } = props;
  return (
    <>
      <img src={imageString} alt={name + "'s avatar"} className="user-avatar" />
      <div className="user-quick-info">
        <div className="user-money">
          $ {score}
        </div>
        <div className="user-level">
          Level {level}
        </div>
      </div>
    </>
  )
}
