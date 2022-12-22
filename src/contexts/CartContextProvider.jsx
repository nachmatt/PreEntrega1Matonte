import { createContext, useState, useEffect } from "react";

export const CartContext = createContext([]);

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        const amount = cart
            .map((item) => parseInt(item.item.price) * item.quantityAdded)
            .reduce((partialSum, a) => partialSum + a, 0);
            setTotalAmount(amount);
    }, [cart]);

    function addItem(item, quantity) {
        const isAlreadyAdded = isInCart(item.id); //Si el item se encuentra agregado al carrito
        if (isAlreadyAdded) {
            setCart((prevState) => 
                prevState.map((cart) =>  //Mapea el carrito
                    cart.item.id === item.id //Si el id del item del carrito es el mismo que el de la iteración
                        ? { ...cart, quantityAdded: cart.quantityAdded + quantity} //Al carrito le agrega la cantidad de ese item que se haya comprado
                        : cart //Y sino, devuelve el mismo carrito
                ));
            } else {
            setCart((prevState) =>
                prevState.concat({ item, quantityAdded: quantity })//Si el item no estaba agregado al carrito, lo agrega al carrito
            );
            }
        }

    function removeItem(itemId) {
        setCart((prevState) => 
            prevState.filter((item) => item.item.id !== itemId) //Setea el carrito a un array que contenga los productos que estaban menos el seleccionado
        );
    }

    function clear() {//Borra todo lo del carrito, y sus cantidades
        setCart([]); 
        setTotalAmount(0);
    }

    // const isInCart = (itemId) => cart.some((item) => item.id ===itemId) //Devuelve true si en el carro ya hay un producto con el mismo id que el seleccionado
    function isInCart(itemId) {
        return Boolean(cart.find((item) => item.item.id === itemId));
    }
    return (
        <CartContext.Provider value={{addItem, removeItem, clear, isInCart, cart, totalAmount}}>
            {children}
        </CartContext.Provider>
    )
}
