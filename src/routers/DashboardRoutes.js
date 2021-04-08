import { Switch, Route, Redirect } from "react-router-dom"
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Equipo from '../components/Equipo';

const DashboardRoutes = () => {
    return ( 
        <>
            <Navbar />

            <div>
                <Switch>
                    <Route exact path="/Home" component={Home}  />
                    <Route exact path="/Equipo" component={Equipo}  />

                    <Redirect to="/Home"/>
                </Switch>

            </div>
        </>
     );
}
 
export default DashboardRoutes;