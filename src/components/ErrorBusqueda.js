import React from 'react'

const ErrorBusqueda = ({mensaje}) => {
    return (
        <p className="my-3 p-4 text-center alert alert-danger">{mensaje} </p>
    )
}

export default ErrorBusqueda;
