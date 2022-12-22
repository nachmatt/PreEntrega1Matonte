import { Ring } from '@uiball/loaders'
import { useGetItem } from "../../hooks/useGetItem";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const items = useGetItem();

    if (!items) {
        return <Ring />;
    }
    return (  
        <div className='container-fluid mt-5'>
            <ItemList products={items}></ItemList>
        </div>
    )
}

export default ItemListContainer
