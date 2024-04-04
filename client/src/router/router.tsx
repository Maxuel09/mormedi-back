import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Clients from '../pages/Clients';

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