import React, { useContext } from 'react'
import './CartWidget.scss'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

import { CartContext } from "../../contexts/CartContextProvider";

const CartWidget = () => {
    const { cart } = useContext(CartContext);
    const count = cart.length;
    //Icono del cart traído de la librería Material UI (MUI)

    return (
        <div className='carrito'>            
            <Link to="/cart" className="relative">
                <ShoppingCartIcon fontSize='large' />
                <span>{count}</span>    
            </Link>
        </div>
    )
}

export default CartWidget