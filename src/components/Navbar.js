
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
            
            <div className=" container d-flex justify-content-start">

                <div className="navbar-nav mr-auto p-2">  
                    <NavLink 
                        className="nav-item mr-auto  nav-link display-6" 
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
            </div>

                <div className="mx-auto">
            
                    <button   
                        className=" text-warning btn_nav btn-lg pb-2" 
                         onClick = {handleLogout}                        
                    >
                        Logout
                    
                    </button>
                
                        
                </div>
                

            

        </nav>
    )
}

export default Navbar;