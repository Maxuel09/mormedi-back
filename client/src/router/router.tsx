import { createBrowserRouter } from 'react-router-dom';
import Clients from '../pages/Clients';
import Login from '../components/Login';
import Sidebar from '../components/Sidebar';
import Root from './Root';

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
               path: "/login",
                element: <Login />
            },

            {
                path: "/sidebar",
                element: <Sidebar />
            }
        ],
    },
    // {
    //     path: "/login",
    //     element: <Login />
    // },
    // {
    //     path: "/register",
    //     element: <Register />
    // },
])

export default router;