import { Navigate } from "react-router-dom"
import SignUp from "../pages/SignUp/SignUp"
import AdminHome from "../pages/AdminHome/AdminHome"
import Home from "../pages/Home/Home"
import ProtectedRoute from "./ProtectedRoute"
import EstarBien from "../pages/EstarBien/EstarBien"
import ExpoAgro from "../pages/ExpoAgro/ExpoAgro"
import FestivalRico from "../pages/FestivalRico/FestivalRico"

export const arrayRoutes = [
    {
        path: '/home',
        element: <ProtectedRoute><Home/></ProtectedRoute>
    },
    {
        path: '/admin',
        element: <ProtectedRoute><AdminHome/></ProtectedRoute>
    },
    {
        path: '/estarbien',
        element: <ProtectedRoute><EstarBien/></ProtectedRoute>
    },
    {
        path: '/festivalrico',
        element: <ProtectedRoute><FestivalRico/></ProtectedRoute>
    },
    {
        path: '/expoagro',
        element: <ProtectedRoute><ExpoAgro/></ProtectedRoute>
    },
    {
        path: '/signup',
        element: <SignUp/>
    },
    {
        path: '*',
        element: <Navigate to={'/'}/>
    }
]