import { Switch, Route, Redirect } from "react-router-dom"
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Buscador from "../components/Buscador";
// importo el contexto


const DashboardRoutes = ( {history} ) => {



    return ( 
        <>
            <Navbar history={history} />

            <div className="container mt-5">
                <Switch>
                    <Route exact path="/Home" component={Home}  />
                    <Route exact path="/Buscador" component={Buscador}  />


                    <Redirect to="/Home" />
                </Switch>

            </div>
    
        </>
     );
}
 
export default DashboardRoutes;