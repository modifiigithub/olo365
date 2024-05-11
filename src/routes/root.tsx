import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import ErrorPage from "../pages/error-page/ErrorPage";
import Carts from "../pages/carts/Carts";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import Info from "../pages/profile-info/profile-info";
import ProfileLayout from "../layout/ProfileLayout";
import ResetPassword from "../pages/reset-password/ResetPassword";
import MyOrder from "../pages/my-history/MyOrder";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "/carts",
                element: <PrivateRoute>
                    <Carts />
                </PrivateRoute>
            },
            {
                path: "/profile",
                element: <PrivateRoute>
                    <ProfileLayout />
                </PrivateRoute>,
                children: [
                    {
                        path: "",
                        element: <Info />
                    },
                    {
                        path: "reset-password",
                        element: <ResetPassword />
                    },
                    {
                        path: "my-order",
                        element: <MyOrder />
                    },
                ]
            },
        ]
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    }
]);

export default router;