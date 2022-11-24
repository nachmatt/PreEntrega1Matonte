import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { ItemCount } from "../ItemListContainer/ItemCount";
import './ItemDetail.scss'

const ItemDetail = ({ products }) => {
    const navigate = useNavigate();
    const [count, setCount] = useState(1);
    const [currentStock, setCurrentStock] = useState(products.stock);
    const maxQuantity = currentStock;

    function handleCount(type) {
        if (type === "plus" && count < maxQuantity) setCount(count + 1);
        if (type === "minus" && count > 1) setCount(count - 1);
    }
    
    function handleAdd() {
        if (currentStock < count) alert("No hay suficiente stock de este producto");
        else setCurrentStock(currentStock - count);
    }
    
    function handleCheckout() {
        navigate("/cart");
    }

    return (
    <div className="item-detail-wrapper container">
        <img src={products.img} alt={products.name} />

        <div className="item-detail-description">
            <h2>{products.name}</h2>
            <p>{products.description}</p>
            <span>Price: <strong>${products.price}</strong></span>
            {currentStock > 0 && (<p>In Stock: <strong>{currentStock}</strong> </p>)}

            <div className="item-detail-count">
                {currentStock > 0 
                ? (<ItemCount count={count} handleCount={handleCount} />) 
                : (<span> Sin stock </span>)}

                <div className="item-detail-buttons">
                    <button onClick={handleAdd} disabled={currentStock === 0}>
                        Agregar al carrito
                    </button>
                    <button onClick={handleCheckout} className='purchase-button'>
                        Finalizar Compra
                    </button>
                </div>

            </div>
        </div>
    </div>
    )
}

export default ItemDetail