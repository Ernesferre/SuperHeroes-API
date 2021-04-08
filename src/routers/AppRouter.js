// import { Router } from "react-router";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Login from '../components/Login';
import DashboardRoutes from './DashboardRoutes';


const AppRouter = () => {
    return ( 
        <Router>
      <div>

        <Switch>
            <Route  exact path="/login" component={Login} />
            
            <Route  path="/" component={ DashboardRoutes } /> 
        </Switch>

      </div>
    </Router>


     );
}
 
export default AppRouter;