import { createBrowserRouter } from 'react-router-dom';
import Clients from '../pages/Clients';
<<<<<<< HEAD
import LoginForm from '../pages/LoginForm';
import RegisterForm from "../pages/RegisterForm"

||||||| cf9a058
import Headless from '../pages/Headless'
=======
import Login from '../components/Login';
import Root from './Root';
>>>>>>> 4f5c8d9f7ebfaf3904a681ec38cf7854d7734161

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
<<<<<<< HEAD
    {
        path: "/login",
        element: <LoginForm />
    },
    {
        path: "/register",
        element: <RegisterForm />
    },
||||||| cf9a058
    {
        path: "/head",
        element: <Headless />
    },
    {
        path: "/register",
        element: <Login />
    },
=======
    // {
    //     path: "/login",
    //     element: <Login />
    // },
    // {
    //     path: "/register",
    //     element: <Register />
    // },
>>>>>>> 4f5c8d9f7ebfaf3904a681ec38cf7854d7734161
])

export default router;