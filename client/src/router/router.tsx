import { createBrowserRouter } from 'react-router-dom';
import Clients from '../pages/Clients';
import AddClient from "../pages/AddClient"
import Root from './Root';
import LoginForm from "../pages/LoginForm"
import RegisterForm from "../pages/RegisterForm"


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/clients",
                element: <Clients />
            },
            {
                path: "/addClient",
                element: <AddClient />
            },
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