import React from 'react'
import AppContext from '../AppContext/AppContext';
import { useContext} from 'react';
import { useHistory } from "react-router-dom";


const TeamDetails = () => {

        const history = useHistory();

        const context = useContext(AppContext);

        const { hero } = context

        // console.log(hero);

    const handleBack = () => {
        history.push("/Equipo");   
    }
   

    return (
        <>
            <div className="row d-flex justify-content-center">
                    
                    <h1 className="text-white"> {hero.name} </h1>
                    
                    <button 
                        className="btn btn-warning btn-lg text-center mb-5 w-25"
                        onClick={handleBack}
                        >                 
                        Volver 
                    </button>
            </div>

            
            <div className="row mt-3 d-flex justify-content-center">

                    <div className="col-4 text-center">
                        <img 
                            src={hero.images.md}
                            alt= {hero.name}
                            className="img-thumbnail"      
                        ></img>                    
                    </div>

                
                    <div className="col-4 text-white mb-5">

                        

                        <ul className=" ml-2  mb-2">

                            <li className=""><b> Weight: </b> {hero.appearance.weight[1]} </li>
                            <li className=""><b> Height: </b> {hero.appearance.height[1]} </li>
                            <li className=""><b> Complete Name: </b>{hero.biography.fullName} </li>
                            <li className=""><b> Alias: </b> {hero.powerstats.power} </li>
                            <li className=""><b> Eyes Color: </b> {hero.appearance.eyeColor} </li>
                            <li className=""><b> Hair Color: </b> {hero.appearance.hairColor} </li>
                            <li className=""><b> Place of work: </b> {hero.work.base} </li>

                        </ul>

                    </div>  
                   

            </div>

        </>
    )
}

export default TeamDetails


