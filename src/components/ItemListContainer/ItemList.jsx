import React from 'react'
import Item from './Item'
import './ItemList.scss'

const ItemList = ({ products }) => {

    return (
        <div className='container-fluid col-10'> {/*could be this thing*/}
                <ul className='card-wrapper row col-12'>
                    {products.map((product) => 
                        <Item className='col-12 col-lg-3'key={product.id} product={product}></Item>
                    )}
                </ul>
        </div>
    )
}

export default ItemList
