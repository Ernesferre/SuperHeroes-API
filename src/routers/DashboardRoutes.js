import { Switch, Route, Redirect } from "react-router-dom"
import Navbar from '../components/Navbar';
import Buscador from "../components/Buscador";
import Equipo from "../components/Equipo";
import TeamDetails from "../components/TeamDetails";

const DashboardRoutes = () => {

    return ( 
        <>
            <Navbar />

            <div className="container mt-5">
                <Switch>
                    <Route exact path="/Equipo" component={Equipo}  />
                    <Route exact path="/Buscador" component={Buscador}  />
                    <Route exact path="/TeamDetails" component={TeamDetails}  />


                    <Redirect to="/Equipo" />
                </Switch>

            </div>
    
        </>
     );
}
 
export default DashboardRoutes;