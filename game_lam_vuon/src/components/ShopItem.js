import React from 'react'
import seedImgs from '../services/seed.service';

export default function ShopItem(props) {
  const { title, imageString, price, unit } = props;
  return (
    <>
      <img className="product-image" src={seedImgs[imageString] ?? imageString} alt={title} />
      <div className="product-price">
        <span className="price-unit">{unit ?? ""}</span>
        <span className="price">{price ?? ""}</span>
      </div>
    </>
  )
}
