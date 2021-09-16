import React from 'react'

export default function ToolItem(props) {
  const { title, image } = props;
  return (
    <>
      <img className="product-image" src={image} alt={title} />
      <div className="product-quantity" style={{textAlign: 'center'}}>
        <span className="quantity">0</span>
      </div>
    </>
  )
}
