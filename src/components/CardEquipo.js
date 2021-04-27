import React, { useEffect } from 'react'
import {useContext, useState } from 'react'
import AppContext from '../AppContext/AppContext'
import TeamDetails from './TeamDetails';
import {Link} from 'react-router-dom';
import { useHistory, Redirect } from "react-router-dom";


const CardEquipo = ({img}) => {

    const history = useHistory();

    
    
    const context = useContext(AppContext);

    const {heroesBuscador, consultarApi, buscarHeroe, regresarHeroes, hero, eliminarHeroe, equipo, visualizarHeroe} = context

    // const [formacion, setFormacion] = useState([])

    console.log(equipo);

    // useEffect(() => {
        
    //     console.log(equipo)
    // }, [equipo]);

    ////////// FUNCIONES ONCLICK////////
    
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
            console.log(DeleteHeroe);

            eliminarHeroe(DeleteHeroe)
            console.log(equipo) 
    
        }



    return (
        <div>
            {
                equipo.length  ?  (
                    <div className="card ms-3 mb-3 d-flex flex-wrap bg-primary p-2" style={ { maxWidth: 150 }}>
            

                    <div className="card-body">
                    <p className="card-title text-center mt-3"> {img.name} </p> 
                    </div>

                    <img  src={img.images.md} alt={ img.name } className="card-img img-thumbnail" />  

                    <div className="card-body text-center mb-3">    

                    

                    
                    {/* <Link 
                        
                        to={`/ItemDetail`}
                        <TeamDetails/>
                        
                        className="">Ver Detalles
                    </Link>    */}

                    <button 
                            className="btn btn-warning card-text text-center"
                            onClick= {() => handleDetails(img)}
                            
                            >Ver detalle
                    </button>

                    <button 
                            className="btn btn-danger card-text text-center"
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

