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
