// import { Router } from "react-router";
import {
    BrowserRouter as Router,
    Switch,
    
} from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import {useContext} from 'react';
import Login from '../components/Login';
import DashboardRoutes from './DashboardRoutes';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';


const AppRouter = () => {

const { user } = useContext(AuthContext);



    return ( 
        <Router>
      <div>

        <Switch>
            <PublicRoute  
              exact 
              path="/login" 
              component={Login} 
              isAuthenticated= {user.logged}
            />
            
            <PrivateRoute  
                path="/" 
                component={ DashboardRoutes } 
                isAuthenticated= {user.logged}
            /> 
        </Switch>

      </div>
    </Router>


     );
}
 
export default AppRouter;