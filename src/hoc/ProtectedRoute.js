import React from 'react';
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ Component, ...rest }) => {
    return (
        <div>
            <Route {...rest} render={(props) => (
                localStorage.getItem("access_token") ? <Component {...props} /> : <Redirect to="/login" />
            )} />
        </div>
    );
};

export default ProtectedRoute;