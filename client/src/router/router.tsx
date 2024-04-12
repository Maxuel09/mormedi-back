import { createBrowserRouter } from 'react-router-dom';
import Clients from '../pages/Clients';
import LoginForm from '../pages/LoginForm';
import RegisterForm from "../pages/RegisterForm"
import Login from '../components/Login';
import Root from './Root';
import Sidebar from '../components/Sidebar';


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
               path: "/login",
                element: <Login />
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
    {
        path: "/register",
        element: <Login />
    },
    {
        path: "/sidebar",
        element: <Sidebar />
    },
   

])

export default router;