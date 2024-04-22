import { createBrowserRouter } from 'react-router-dom';
import Clients from '../pages/Clients'
import Offers from '../pages/Offers';
import Dashboard from '../pages/Dashboard';
import AddClient from "../pages/AddClient";
import AddOffer from "../pages/AddOffer"
import Root from './Root';
import LoginForm from "../pages/LoginForm"
import RegisterForm from "../pages/RegisterForm"



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Dashboard/>
            },
            {
                path: "/clients",
                element: <Clients />
            },
            {
                path: "/offers",
                element: <Offers/>
            },
            {
                path: "/addClient",
                element: <AddClient />
            },
            {
                path: "/addOffer",
                element: <AddOffer/>
            }
        ],
    },
    {
        path: "/login",
        element: <LoginForm />
    },
    {
        path: "/register",
        element: <RegisterForm />
    },
])

export default router;