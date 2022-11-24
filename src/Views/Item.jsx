import React from 'react'
import { Layout } from '../components/Layout/Layout'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';

const Item = () => {
    return (
        <div>
            <Layout>
                <ItemDetailContainer />
            </Layout>
        </div>
    )
}

export default Item