# Drag - Drop

## On Event Handler
- onDrag: Chạy khi thao tác kéo một phần tử.
- onDragStart: Chạy khi bắt đầu kéo một phần tử.
- onDragOver:  Chạy khi một mục được kéo đang được kéo qua một mục tiêu thả hợp lệ, thực hiện cứ sau vài trăm mili giây.
- onDrop: Chạy khi một đối tượng bị kéo thả vào mục tiêu hợp lệ.


## Thêm:
- event.dataTransfer: Đối tượng DataTransfer được sử dụng để giữ dữ liệu đang được kéo trong một thao tác kéo và thả.
- - event.dataTransfer.setData(format, data): lưu dưu liệu
- - event.dataTransfer.getData(format, data): lấy dữ liệu

## Trên source code:



1. Tạo component **Board**
```javascript
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
  const dragOver = e => { e.preventDefault(); }

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
```

2. Tạo component **Card**

```javascript
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
```

3. Tạo component **MainDragDrop** và sử dụng  **Card**,  **Board**

```javascript
import React from 'react'
import Board from './Board';
import Card from './Card';
const list1 = [1, 2, 3]
const list2 = [1, 2, 3, 4]
const list3 = [1, 2, 3, 4]

export default function MainDragDrop() {
  return (
    <div className="main-drag-drop">
       <div className="seeds-wrapper">
        <h2>Seeds 1 🌱</h2>
        <Board id="seeds" className="board">
          {list1.map((item, index) => <Card key={index} id={`seed-1-${index}`} className="card" draggable="true">🌱 seed {item}</Card>)}
        </Board>

        <h2>Seeds 2 🌱</h2>
        <Board id="seeds" className="board">
          {list2.map((item, index) => <Card key={index} id={`seed-2-${index}`} className="card" draggable="true">🌱 seed 2.{item}</Card>)}
        </Board>
      </div>

      <div className="plot-wrapper">
        <h2>Plot 🌱🌱🌱🌱</h2>
        <div className="multi-pot">
          {list3.map((item, index) => <Board key={index} id={`plot-${index}`} className="board"></Board>)}
        </div>
      </div>
    </div>
  )
}
```