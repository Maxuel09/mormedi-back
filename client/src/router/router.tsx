import { createBrowserRouter } from 'react-router-dom';
import Clients from '../pages/Clients';
<<<<<<< HEAD
import Login from '../components/Login';
import Sidebar from '../components/Sidebar';
=======
>>>>>>> 597e925f7678aca6105300c92edfa820eb46889e
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
                element: <Clients />
            },
<<<<<<< HEAD

            {
               path: "/login",
                element: <Login />
            },

            {
                path: "/sidebar",
                element: <Sidebar />
            }
=======
>>>>>>> 597e925f7678aca6105300c92edfa820eb46889e
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