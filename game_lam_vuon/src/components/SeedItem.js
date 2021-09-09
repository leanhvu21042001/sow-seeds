import React from 'react'
import seedImgs from '../services/seed.service';

export default function SeedItem(props) {
  const { title, imageString, price, unit } = props;
  console.log(props);
  return (

    <>
      <img className="product-image" src={seedImgs[imageString]} alt={title} />
      <div className="product-price">
        <span className="price">{price}</span>
        <span className="price-unit">{unit}</span>
      </div>
    </>
  )
}
