import React from 'react'
import '../../Styles/style.css';
import Cart from '../../images/supermarket.svg';
interface Props {
  image: string;
  text: string;
  price: number;
}
const AddCart = ({image, text, price} : Props) => {
  return (
      <div className="cart-container">
          <img src={image} alt="recipe" className="image"/>
          <div className="card">
            <div className="card-body">
              {text}
            </div>
            <div className="card-footer">
              <div className="price">
                {`$${price}`}
              </div>
              <div className="cart-image">
                <img src={Cart} alt="cart" className="cart" />
              </div>
            </div>
          </div>
    </div>
  )
}

export default AddCart