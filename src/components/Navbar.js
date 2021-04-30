
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import AppContext from '../AppContext/AppContext'

export const Navbar = () => {

    const { logout }  = useContext(AppContext);
    
    const handleLogout = () => {
        logout();
    }
    
    return (
        <nav className="navbar sticky-top navbar-expand-sm navbar-dark bg-success ">
            
            <div className=" col navbar-collapse container d-flex justify-content-start">

                <div className="navbar-nav p-2">  
                    <NavLink 
                        className="nav-item  nav-link display-6" 
                        to="/Equipo"
                    >
                        Equipo   
                    </NavLink>
                </div>
       
                
                <div className="navbar-nav p-2">
                    <NavLink 
                        className="nav-item nav-link display-6" 
                        exact
                        to="/Buscador"
                    >
                        Buscador
                    </NavLink>
                </div>

                <div className="ml-auto">

                    <button   
                        className=" text-dark btn btn-lg" 
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