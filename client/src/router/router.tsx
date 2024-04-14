import { createBrowserRouter } from 'react-router-dom';
import Clients from '../pages/Clients';
import LoginForm from '../pages/LoginForm';
import RegisterForm from "../pages/RegisterForm"
import Root from './Root';
import LoginZod from "../pages/LoginZod"


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/clients",
                element: <Clients />
            },
        ],
    },
    {
        path: "/login",
        element: <LoginZod />
    },
    {
        path: "/register",
        element: <RegisterForm />
    },
])

export default router;