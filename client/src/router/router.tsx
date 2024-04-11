import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Clients from '../pages/Clients';
import Headless from '../pages/Headless'
import Login from '../pages/Login';

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
        path: "/head",
        element: <Headless />
    },
    {
        path: "/login",
        element: <Login />
    },
])

export default router;