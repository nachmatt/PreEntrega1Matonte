import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

//Loader
import { Ring } from '@uiball/loaders'
//Mock
import { itemsMock } from '../../mocks/items.mock';

const ItemListContainer = () => {
    const { category } = useParams()
    const [products, setProducts] = useState([]);

    useEffect(() => {
        new Promise((resolve) => {
            // Reset the state to show the loading spinner
            setProducts([]);

            return setTimeout(() => {
                resolve(itemsMock);
            }, 500);
        }).then((data) => {
            if (category) {
                const categories = data.filter(
                    (product) => product.category === category
                );
                setProducts(categories);
            } else {
                setProducts(data);
            }
        });
    }, [category]);

    if (products.length === 0) {
        return <Ring />;
    }

    return (
        <div className='container-fluid mt-5'>
            <ItemList products={products}></ItemList>
        </div>
    )
}

export default ItemListContainer