import React from 'react';
import Cookies from 'universal-cookie';
import { Navigate, Outlet} from 'react-router-dom'

const PublicRoute = () => {
    const cookie = new Cookies();
    const token = cookie.get("token");

    return token ? <Navigate to="/home" /> : <Outlet />
}

export default PublicRoute;

