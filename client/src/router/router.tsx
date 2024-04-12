import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Clients from '../pages/Clients';
import LoginForm from '../pages/LoginForm';
import RegisterForm from "../pages/RegisterForm"


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Clients />
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