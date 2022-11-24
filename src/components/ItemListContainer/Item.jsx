import React from 'react'
import './Item.scss'
import { useNavigate } from "react-router-dom";

const Item = ({product}) => {
    const navigate = useNavigate();

    function handleNavigate() {
        navigate(`/item/${product.id}`);
    }

    return (
            <ul className='items-wrapper'  onClick={handleNavigate}>
                <img src={product.img} alt="Product"/>
                <li>Producto: {product.name}</li>
                <li>Descripción: {product.description}</li>
                <li>Precio: {product.price}</li>
                <li>Stock: {product.stock}</li>
            </ul>
    )
}

export default Item
