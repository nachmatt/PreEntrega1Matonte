import { useNavigate } from "react-router-dom";
import {useGetItemImg} from "../../hooks/useGetItemImg";
import { Ring } from '@uiball/loaders';
import './Item.scss'
import { Children } from "react";

const Item = ( {product, totalAmount, children} ) => {
    const navigate = useNavigate();
    
    const img = useGetItemImg(product.img);
    const description = product.description.slice(0, 30);
    const title = product.name.slice(0, 20);

    function handleNavigate() {
        navigate(`/item/${product.id}`);
    }

    if (!img) {
        return <Ring />;
    }

    return (
            <ul className='items-wrapper' onClick={handleNavigate}>
                <img src={img} alt="Product"/>
                <li className="product-name">{product.name.length > 20 ? `${title} ...` : product.name}</li>
                <li className="product-description">{product.description.length > 30 ? `${description} ...` : product.description}</li>
                <li className="product-price">Precio: <span>${product.price}</span></li>
                <li className={product.stock === 0 ? "no-stock" : "yup-stock"}> 
                    {product.stock === 0 
                    ? "Sin Stock" : totalAmount 
                    ? `Agregados: ${totalAmount}` : `En Stock: ${product.stock}`} 
                    {/* si hay stock del producto muestra el stock, si hay agragados muestra la cantidad de agregados */}
                </li>
                <div className="children-container">
                    {children}
                </div>
            </ul>
    )
}

export default Item
