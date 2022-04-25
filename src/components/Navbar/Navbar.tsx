import React, { useState } from 'react'
import Chevron from 'react-chevron';
import DropDown from '../DropDown/DropDown';
import { Product } from '../../product-list';
import Button from '../Button/Button';

import '../../Styles/style.css';
function Navbar() {
   
    const [openProduct, setOpenProduct] = useState(false);
    const [openRecipe, setOpenRecipe] = useState(false);
    const [products] = useState<Product[]>([{
        id: 1,
        name: "Fruit"
        },
        {
            id: 2,
            name: "Vegetables"
        },
        {
            id: 3,
            name: "Eggs"
        },
        {
            id: 4,
            name: "Milk"
        },
        {
            id: 5,
            name: "Meat"
        },
        {
            id: 6,
            name: "Fresh drinks"
        }
    ])

    const handleProduct = () => {
        setOpenProduct(!openProduct);
    }
    const handleRecipe = () => {
        setOpenRecipe(!openRecipe);
    }
    return (
        <>
            <nav>
            <div className="container">
                <div className="logos">
                    <div className="logo">
                        <span className="logo-inner">
                        </span>
                        <span className="logo-mini">
                        </span>
                        <span className="logo-dot">
                        </span>
                    </div>
                    <div  className="logo-name">
                        <p className="logo-name1">Zecco</p> 
                        <p className="logo-sub">
                             Organic Farm
                        </p>
                    </div>
                </div>
              
              <div className="menus">
                <ul className="menu1">
                    <li className={openRecipe ? 'menuItemClick' : 'menuItem'} onClick = {handleRecipe}>Recipe Box
                        <span className='chevron'> <Chevron  direction={openRecipe ? 'up' : 'down'}/></span>
                    </li>
                    <li className={openProduct ? 'menuItemClick' : 'menuItem'} onClick = {handleProduct}>Products
                        <span className="chevron"> <Chevron  direction={openProduct ? 'up' : 'down'}/></span>
                    </li>
                    <li className="menuItem">About us</li>
                    <li className="menuItem">Visit us</li>
                </ul>
                <ul className="menu2">
                    <li className="menuItem">Login</li>
                    <li>
                    {/* <button type="button"> create account</button> */}
                    <Button type={'primary'} label={'create account'}/>

                    </li>
                </ul>
                </div>
            </div>
        </nav>
        {openProduct && <DropDown products={products} />}
        </>
        

    )
}

export default Navbar