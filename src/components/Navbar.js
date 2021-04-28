
import React from 'react';
import { Link, NavLink, useHistory} from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { types } from '../types/types';

export const Navbar = () => {

    const { user: { name }, dispatch }  = useContext(AuthContext);
    const history = useHistory();
    // console.log(history);

    const handleLogout = () => {

        history.replace('/login');

        dispatch({
            type: types.logout
        })
    }
    

    return (
        <nav className="navbar sticky-top navbar-expand-sm navbar-dark bg-success ">
            
            <div className="navbar-collapse d-flex justify-content-start">

                <div className="navbar-nav p-1">  
                    <NavLink 
                        // activeClassName="active"
                        className="nav-item nav-link display-6" 
                        to="/Equipo"
                    >
                        Equipo   
                    </NavLink>
                </div>
       
                
                <div className="navbar-nav ">
                    <NavLink 
                        // activeClassName="active"
                        className="nav-item nav-link display-6" 
                        exact
                        to="/Buscador"
                    >
                        Buscador
                    </NavLink>
                </div>

            </div>

           

            <div className="">
                <div className="navbar-nav ml-auto nav-item nav-link ml-4 ">

                    <button 
                        
                        className="nav-item nav-link text-dark btn btn-warning " 
                        onClick = {handleLogout}
                        
                    >
                        Logout
                    </button>

                    
                </div>
            </div>


        </nav>
    )
}

export default Navbar;