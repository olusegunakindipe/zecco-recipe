import React from 'react'
import dish from '../../images/dish.png';
import Button from '../Button/Button';
import '../../Styles/style.css';
function Recipe() {
  return (
      <div className="page-content">
          <div className="page-text">
                <div className="text-left">
                    <div className="lead" >You deserve better</div>
                    <div className="taste">Consider this a taste intervention.</div>
                    <Button type={'secondary'} label={'Learn more'}/>
                </div>
              
          </div>
          <div className="page-image">
              <img className="dish" src={dish} alt="dish" />

          </div>
    </div>
  )
}

export default Recipe