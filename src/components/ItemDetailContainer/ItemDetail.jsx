import { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { ItemCount } from './ItemCount.jsx'
import { CartContext } from '../../contexts/CartContextProvider.jsx';
import { useGetItemImg } from '../../hooks/useGetItemImg.js';

import './ItemDetail.scss'

const ItemDetail = ({ product }) => {
    const {addItem, isInCart} = useContext(CartContext)
    const navigate = useNavigate();
    const [count, setCount] = useState(1);
    const [currentStock, setCurrentStock] = useState(product.stock);
    const maxQuantity = currentStock;
    const img = useGetItemImg(product.img);

    function handleCount(type) {
        if (type === "plus" && count < maxQuantity) setCount(count + 1);
        if (type === "minus" && count > 1) setCount(count - 1);
    }
    
    function handleAdd() {
        if (currentStock < count) alert("No hay suficiente stock de este producto");
        else setCurrentStock(currentStock - count);
        addItem(product, count);
    }
    
    function handleCheckout() {
        navigate("/cart");
    }

    return (
    <div className="item-detail-wrapper container">
        <img src={img} alt={product.name} />

        <div className="item-detail-description">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <span>Price: <strong>${product.price}</strong></span>
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