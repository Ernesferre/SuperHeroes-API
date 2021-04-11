import { useState } from 'react';
import { Switch, Route, Redirect } from "react-router-dom"
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Buscador from "../components/Buscador";
import {Info}  from '../Context/index'

const DashboardRoutes = () => {

    const [datas, setDatas] = useState({
        personajes: [],
    });

    return ( 
        <Info.Provider value={[datas, setDatas]}>
        <>
            <Navbar />

            <div className="container mt-5">
                <Switch>
                    <Route exact path="/Home" component={Home}  />
                    <Route exact path="/Buscador" component={Buscador}  />


                    <Redirect to="/Home" />
                </Switch>

            </div>
        </>
        </Info.Provider>
     );
}
 
export default DashboardRoutes;