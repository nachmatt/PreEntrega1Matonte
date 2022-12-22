import { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import { CartContext } from '../contexts/CartContextProvider';
import { addDoc, collection, doc, getFirestore, updateDoc, serverTimestamp } from 'firebase/firestore';
import DeleteIcon from '@mui/icons-material/Delete';
import Item from '../components/ItemListContainer/Item';
import './Cart.scss'

//Loader
import { Ring } from '@uiball/loaders'

const Cart = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [updatingProducts, setUpdatingProducts] = useState(false);
    const [buyer, setBuyer] = useState({name: 'nach', phone: '333666999', email: 'nach@gmail.com'})
    const { cart:items, cart, removeItem, clear, totalAmount } = useContext(CartContext);
    const navigate = useNavigate();
    
    
    const getTotalByProduct = (quantity, price) => {
        return quantity * price;
    };

    const handleInputChange = (event) => {
        //const {name, value} = e.target => podría hacerlo más corto así pero perdería claridad en los nombres de las variables
        const inputName = event.target.name;
        const inputValue = event.target.value
        setBuyer((prev) => {
            return {...prev, [inputName]: inputValue}
        })
    }

    const handleFinalizePurchase = () => {
        setIsLoading(true);

        const total = items
        .map((product) => getTotalByProduct(product.quantityAdded, product.item.price))  //Mapea el carrito y calcula el precio de sus productos
        .reduce((previousValue, currentValue) => previousValue + currentValue); //Suma el total de los precios para tener un total global

        const order = { //Creo la orden a pushear a firestore
            client: { name: buyer.name, phone: buyer.phone, email: buyer.email },
            items: cart,
            total, //total:total,
            date: serverTimestamp() //Fecha de la compra
        };
        
        const db = getFirestore()
        const ordersCollection = collection(db, 'ventas')

        addDoc(ordersCollection, order) //Añado a la base de datos la orden
            .then(() => {
                setUpdatingProducts(true);
            })
            .catch((err) => console.error({ err }))
            .finally(() => {});
        }

        useEffect(() => { //Una vez añadí la orden a la base de datos
            if(updatingProducts) { 
                const db = getFirestore();

                items.forEach((item) => { //Actualizo el stock
                    const itemRef = doc(db, 'items', item.item.id);
                    const dataToUpdate = {
                        stock: item.item.stock - item.quantityAdded
                    };
                    updateDoc(itemRef, dataToUpdate) //Y luego limpio el carrito y redirijo a home
                        .then(() => {
                            clear();
                            setIsLoading(false);
                            alert('Compra realizada');
                            navigate('/');
                        })
                        .catch((err) => console.error(err));
                })
            }
        }, [updatingProducts])


    return (
        <Layout>
            <div className='cart-wrapper'>
                {cart.length === 0 
                ? (
                    <div>
                        <h1 className='no-products'>No has agregado productos</h1>
                        <button onClick={() => navigate("/")}>Ir al Inicio</button>
                    </div>
                ) : (
                    <div>
                        <div>
                            {cart.map((product) => {
                                const quantityAdded = product.quantityAdded;
                                return (
                                    <div className='cart-card-container'>
                                        <DeleteIcon onClick={() => removeItem(product.item.id)} color='error' fontSize='large' className='trash-can'/>
                                        <Item product={product.item} quantityAdded={quantityAdded}>
                                            <span>x {quantityAdded}</span>
                                        </Item>  
                                    </div>
                                );
                            })}
                        </div>
                        <div >
                            {isLoading ? (
                                <Ring/>
                            ) : (
                                <div className='totalize-container'>
                                    <form>
                                        <label>
                                            Nombre completo:<input type="text" name="name" value={buyer.name} onChange={handleInputChange}/>
                                        </label>
                                        <label>
                                            Email:<input type="email" name="email" value={buyer.email} onChange={handleInputChange}/>
                                        </label>
                                        <label>
                                            Telefono:<input type="text" name="phone" value={buyer.phone} onChange={handleInputChange}/>
                                        </label>
                                    </form>
                                    <span>Total a pagar: ${totalAmount}</span>
                                    <button onClick={handleFinalizePurchase}>
                                        Finalizar Compra
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </Layout>
    )
}

export default Cart