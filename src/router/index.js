import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import Cart from '../Views/Cart';
import Category from '../Views/Category'
import Item from '../Views/Item';
import Error from '../Views/Error';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/category/:category',
        element: <Category />
    },
    {
        path: '/item/:id',
        element: <Item />
    },
    {
        path: '/cart',
        element: <Cart />
    },
    {
        path: '*',
        element: <Error />
    }
])