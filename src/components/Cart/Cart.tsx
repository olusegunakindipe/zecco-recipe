import React from 'react'
import '../../Styles/style.css';
import Prev  from '../../images/back.svg';
import Next from '../../images/front.svg';
import AddCart from '../AddCart/AddCart';
import Salmon from '../../images/salmon.png';
import BakedEggs from '../../images/baked-egg.png';
import Avocado from '../../images/avocado.png';

function Cart() {
  return (
    <div className="container-latest">
          <div className="recipe-latest">
              <div className="latest"> Latest Recipes</div> 
              <div className="svg-image">
                <img src={Prev} alt="previous" className="prev"/>
                <img src={Next} alt="next" className="next"/>
              </div>
          </div>
          <div className="cart">
        <AddCart image={BakedEggs} price={8}text="Portobello Baked Eggs with avocado &amp; bread"/>
        <AddCart image={Salmon} price={15} text="Summery salmon, beetroot &amp; spicy mix" />
        <AddCart image={Avocado} price={8} text="Backed Avocado Egg with herbs"/>
          </div>
          

          
    </div>
  )
}

export default Cart