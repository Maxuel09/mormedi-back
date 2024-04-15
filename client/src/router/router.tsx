import { createBrowserRouter } from 'react-router-dom';
import Clients from '../pages/Clients';
import Root from './Root';
import LoginZod from "../pages/LoginZod"
import RegisterZod from "../pages/RegisterZod"


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
        element: <RegisterZod />
    },
])

export default router;