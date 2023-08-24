import React from "react";
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MyRoute({ component: Component, isClosed, ...rest }) {
    const isLoggedIn = false; // Usuário está ou não logado

    if(isClosed && !isLoggedIn) // Se a rota está fechada e o usuário
    {                          //  não está logado
        return(
            <Redirect to={{ pathname: '/login', 
                            state: {
                                prevPath: rest.location.pathname,
                            },
                        }} 
            />
        );
    }

    return(
        <Route { ...rest } component={Component} />
    );
}

MyRoute.defaultProps = {
    isClosed: false,
};

MyRoute.propTypes = {
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
    isClosed: PropTypes.bool,
};