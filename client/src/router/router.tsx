import { createBrowserRouter } from 'react-router-dom';
import Clients from '../pages/Clients';
import AddClient from "../pages/AddClient"
import Root from './Root';
// import LoginForm from "../pages/LoginForm"
import RegisterForm from "../pages/RegisterForm"
import Login from '../pages/Login';


const router = createBrowserRouter([
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
        ],
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <RegisterForm />
    },
])

export default router;