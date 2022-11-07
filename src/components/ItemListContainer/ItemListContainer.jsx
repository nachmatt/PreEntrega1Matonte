import React from 'react'

const ItemListContainer = ({greeting}) => {
    return (
        <div className='container-fluid mt-5'>
            <h1>{greeting}</h1>
        </div>
    )
}

export default ItemListContainer