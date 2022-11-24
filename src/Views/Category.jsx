import React from 'react'
import { Layout } from '../components/Layout/Layout';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';


const Category = () => {
    
    return (
        <div>
            <Layout>
                <ItemListContainer />
                {/* muestra solo los productos que coinciden con la categoría especificada */}
                {/* {categories.map((product) => <Item product={product}></Item>)} */}
            </Layout>
        </div>
    )
}

export default Category