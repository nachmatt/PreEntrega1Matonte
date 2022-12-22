import { useGetItem } from "../../hooks/useGetItem";
import { Ring } from '@uiball/loaders'
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const items = useGetItem();

    if (!items) {
        return <Ring />;
    }

    return (
        <div className="flex justify-center items-center ">
            <ItemDetail product={items} />
        </div>
    );
}

export default ItemDetailContainer





