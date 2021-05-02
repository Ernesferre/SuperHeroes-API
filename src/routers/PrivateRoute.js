import React, {useEffect, useContext} from 'react'
import { Redirect, Route } from 'react-router'
import AppContext from '../AppContext/AppContext'


const PrivateRoute = ({

    component: Component,
    ...props

}) => {

    const context = useContext(AppContext);

    const { autenticado } = context
    
    useEffect(() => {
        console.log(autenticado)
        
    }, [autenticado])

    return (
       <Route {...props}
            component={ (props) => (
                ( autenticado )
                    ? (<Component {...props}/>)
                    : (<Redirect to="/login"/> )
            )}     
       />
    )
}



export default PrivateRoute;

// PrivateRoute.propTypes = {
//     isAuthenticated: PropTypes.bool.isRequired,
//     component: PropTypes.func.isRequired
// }
