import React from 'react'

export default function Board(props) {

  // hàm được chạy khi một phần tử được drop vào.
  const drop = e => {
    e.preventDefault();
    const seed_id = e.dataTransfer.getData('seed_id');
    const card = document.getElementById(seed_id);
    card.style.display = 'block';
    e.target.appendChild(card);
  }

  // không có hàm này không thể drop vào
  // Chiếm kiểm soát, không cho đè phần tử con, chỉ đè phần tử cha hiện tại.
  const dragOver = e => {
    e.preventDefault();
  }
  return (
    <div
      id={props.id}
      className={props.className}
      onDragOver={dragOver}
      onDrop={drop}
    >
      {props.children}
    </div>
  )
}
