import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import veggy from '../../images/veggy.png';
import Button from '../Button/Button';
import '../../Styles/style.css';
const Shop = () => {

  useEffect(() => {
    AOS.init({})
  }, []);

  return (
      <div className='container-shop'>
        <div className="fruit">
          <div className="fruit-pad" data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
            <img className="veggy" src={veggy} alt="vegetable" />
          </div>
        </div>
      <div className='shop-text'>
      
        <div data-aos="fade-up-left" >
          <div  className="small" >
            We make it easy for you to cook delicious dinners
          </div>
          </div>
          <div className="recipes" data-aos="zoom-in-down">
            <div  className="sub-taste">
              Simply choose your recipes from a weekly menu and we’ll deliver freshly picked vegetables, pre-portioned ingredients and step-by-step recipes direct to your door ready for you to cook.
            </div>
          </div>
            <Button  type={'secondary'} label={'shop now'}/>
        </div>

      </div>
  )
}

export default Shop