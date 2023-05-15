import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../components/Pages/Home";
import Login from "../components/Pages/Login";
import Register from "../components/Pages/Register";
import Checkout from "../components/Pages/Checkout";
import Bookings from "../components/Pages/Bookings";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: ([
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute>
                    <Checkout></Checkout>
                </PrivateRoute>,
                loader: ({params}) => fetch(`https://car-doctor-server-mahdi105.vercel.app/services/${params.id}`)
            },
            {
                path: '/bookings',
                element: <PrivateRoute>
                    <Bookings></Bookings>
                </PrivateRoute>
            }
        ])
    }
])

export default router;