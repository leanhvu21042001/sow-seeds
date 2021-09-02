import React from 'react'

export default function Card(props) {

  // Khi bắt đầu kéo Card hàm này sẽ
  const dragStart = e => {
    const { target } = e;
    // tạo dữ liệu cần dùng
    e.dataTransfer.setData('seed_id', target.id);
    setTimeout(() => { /* target.style.display = 'none'; */ }, 0);
  }

  // không cho đè lên phần phần tử là Card
  const dragOver = e => {
    e.stopPropagation();
  }

  return (
    <div
      id={props.id}
      className={props.className}
      draggable={props.draggable}
      onDragOver={dragOver}
      onDragStart={dragStart}
    >
      {props.children}
    </div>
  )
}
