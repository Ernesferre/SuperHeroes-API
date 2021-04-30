import React from 'react'
import {useContext } from 'react'
import AppContext from '../AppContext/AppContext'
import { useHistory } from "react-router-dom";

const CardEquipo = ({img}) => {

    const history = useHistory();
    
    const context = useContext(AppContext);

    const { hero, eliminarHeroe, equipo, visualizarHeroe} = context

       console.log(equipo);
  
        const handleDetails = (id) => {
            console.log("debo crear un nuevo componente donde pueda visualizar toda la info del Integrante");
            console.log(id)
            visualizarHeroe(id);
            console.log(hero);
            history.push("/TeamDetails")            
        } 

        const handleDelete = (id) => {
            console.log(`removiendo personaje con ID: ${id}`);
            const DeleteHeroe = equipo.filter((heroe) => heroe.id !== id);
            eliminarHeroe(DeleteHeroe);
            console.log(equipo);
        }

    return (
        
        <div>
            {
                equipo.length  ?  (
                    <div className="card ms-3 mb-3 d-flex flex-wrap bg-warning p-2" style={ { maxWidth: 170 }}>
            

                        <div className="card-body">
                                <p className="card-title text-center mt-3 font-weight-bold"> {img.name} </p> 
                        </div>

                            <img  src={img.images.md} alt={ img.name } className="card-img img-thumbnail" /> 

                            
                            <ul className="list-group list-group-flush bg-warning text-left p-4">

                                <li className="text-center text-uppercase mt-3 font-weight-bolder">Powerstats</li>
                                <hr/>
                                <li className=""><b> Intelligence: </b> {img.powerstats.intelligence} </li>
                                <li className=""><b> Strength: </b> {img.powerstats.strength} </li>
                                <li className=""><b> Speed: </b> {img.powerstats.speed} </li>
                                <li className=""><b> Durability: </b>{img.powerstats.durability} </li>
                                <li className=""><b> Power </b> {img.powerstats.power} </li>
                                <li className=""><b> Combat </b> {img.powerstats.combat} </li>

                            </ul>

                        <div className="card-body text-center mb-3">    

                            <button 
                                    className="btn btn-outline-dark text-center btn-xs font-weight-bold"
                                    onClick= {() => handleDetails(img)}
                                    
                                    >Ver detalle
                            </button>

                            <button 
                                    className="btn btn-danger text-center btn-md"
                                    onClick= {() => handleDelete(img.id)}
                                    >Eliminar de Equipo
                            </button>

                        </div>

                    
                    </div>
                    ) : 

                    <h2 className="text-white"> Elegir Personajes </h2>     
            }       
    </div>
    )
}

export default CardEquipo;

