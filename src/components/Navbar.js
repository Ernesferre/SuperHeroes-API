
import React from 'react';
import { Link, NavLink, useHistory} from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { types } from '../types/types';

export const Navbar = () => {

    const { user: { name }, dispatch }  = useContext(AuthContext);
    const history = useHistory();
    console.log(history);

    const handleLogout = () => {

        history.replace('/login');

        dispatch({
            type: types.logout
        })
    }
    

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

                    <button 
                        
                        className="nav-item nav-link btn" 
                        onClick = {handleLogout}
                        
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;