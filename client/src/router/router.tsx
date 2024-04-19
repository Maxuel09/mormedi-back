import { createBrowserRouter } from 'react-router-dom';
import Clients from '../pages/Clients';
import AddClient from "../pages/AddClient"
import Root from './Root';
import LoginForm from "../pages/LoginForm"
import RegisterForm from "../pages/RegisterForm"
import Offers from "../pages/Offers"
import AddOffer from "../pages/AddOffer"

const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginForm />
    },
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Clients />
            },
            {
                path: "/addClient",
                element: <AddClient />
            }, 
            {
                path: "/AddOffer",
                element: <AddOffer />
            },
            {
                path: "Offers",
                element: <Offers />
            },
        ],
    },
    {
        path: "/register",
        element: <RegisterForm />
    },

])

export default router;
