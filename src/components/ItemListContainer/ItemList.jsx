import Item from './Item'
import './ItemList.scss'

const ItemList = ( {products} ) => {
    return (
        <div className='container col-10 item-list-wrapper'>
                <ul className='card-wrapper row col-12'>
                    {products.map((product) => 
                        <Item className='col-12 col-lg-3' product={product}></Item>
                    )}
                </ul>
        </div>
    )
}

export default ItemList
