
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
        <nav className="navbar navbar-expand-sm navbar-dark bg-success">
            
            
            <Link 
                // activeClassName="active"
                className="navbar-brand nav-item nav-link" 
                to="/Equipo"
            >
                Equipo
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

        

                    <NavLink 
                        // activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/Buscador"
                    >
                        Buscador
                    </NavLink>
                </div>
            </div>

            {/* <div className="navbar-collapse">
                <div className="navbar-nav">

                    <span className="nav-item nav-link text-info" >
                        {"Hola"} { name }
                    </span>

                    
                </div>
            </div> */}

            {/* <div className="navbar-collapse collapse w-100 order-3 dual-collapse2"> */}
                <div className="navbar-nav ml-auto nav-item nav-link ">

                    <button 
                        
                        className="nav-item nav-link text-dark " 
                        onClick = {handleLogout}
                        
                    >
                        Logout
                    </button>

                    
                </div>
            {/* </div> */}




            {/* <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav">

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
            </div> */}
        </nav>
    )
}

export default Navbar;