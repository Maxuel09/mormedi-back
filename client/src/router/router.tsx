import { createBrowserRouter } from 'react-router-dom';
import Clients from '../pages/Clients';
import Login from '../components/Login';
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
            }
        ],
    },
])

export default router;