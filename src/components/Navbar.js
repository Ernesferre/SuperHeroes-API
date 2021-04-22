
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../auth/AuthContext'

export const Navbar = () => {

    const { user: { name } }  = useContext(AuthContext);
    

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
            
            <Link 
                className="navbar-brand" 
                to="/Home"
            >
                Home
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

        

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/Buscador"
                    >
                        Buscador
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">

                    <span className="nav-item nav-link text-info" >
                        { name }
                    </span>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/login"
                    >
                        Logout
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;