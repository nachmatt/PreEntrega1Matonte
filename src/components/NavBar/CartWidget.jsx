import React from 'react'
import './CartWidget.scss'
import { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {

    //Icono del cart traído de la librería Material UI (MUI)
    const [count, setCount] = useState(10);

    return (
        <div className='carrito'>
            <ShoppingCartIcon fontSize='large'/>        
            <span>{count}</span>
        </div>
    )
}

export default CartWidget