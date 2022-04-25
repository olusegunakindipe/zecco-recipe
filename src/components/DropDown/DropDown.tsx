import React from 'react';
import { Product } from '../../product-list';
import '../../Styles/style.css';

interface Props {
    products: Product[];
}
const DropDown: React.FC<Props> = ({ products }) : JSX.Element => {

  return (
      <div className="product-container">
          {products.map(item => (
              <div className="item" key={item.id}> {item.name}</div>
          ))}
          
      </div>
  )
}

export default DropDown