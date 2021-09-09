import React from 'react'

export default function UserBar(props) {
  const { imageString, name, score, level } = props;
  return (
    <>
      <img src={imageString} alt={name + " Avatar"} className="user-avatar" />
      <div className="user-score">
        $ {score}
      </div>
      <div className="user-level">
        Level: {level}
      </div>
    </>
  )
}
