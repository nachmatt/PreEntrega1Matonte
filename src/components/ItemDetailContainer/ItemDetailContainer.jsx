import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from "react-router-dom";

//Mock
import { itemsMock } from '../../mocks/items.mock';

// //Loader
import { Ring } from '@uiball/loaders'

const ItemDetailContainer = () => {
    const [products, setProducts] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        new Promise((resolve) =>
            setTimeout(() => resolve(itemsMock.find((product) => product.id === id)), 500)
        ).then((data) => setProducts(data));
    }, [id]);

    if (!products) {
        return <Ring />;
    }

    return (
        <div className="flex justify-center items-center ">
            <ItemDetail products={products} />
        </div>
    );
}

export default ItemDetailContainer





