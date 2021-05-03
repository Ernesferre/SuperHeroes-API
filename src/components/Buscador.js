import React from 'react';
import { useState, useContext } from 'react';
import CardHero from './CardHero'
import AppContext from '../AppContext/AppContext';

import Swal from 'sweetalert2';

import { useForm } from 'react-hook-form';


const Buscador = () => {

    const context = useContext(AppContext);
    const [isVolver, setIsVolver] = useState(false)
    const [isBuscar, setIBuscar] = useState(true)
    const {heroesBuscador, regresarHeroes, buscarHeroe, heroes } = context 
    const {register, handleSubmit} = useForm();

const onSubmit = (data, e) => { 
    
    // console.log(data)
  
    const personaje = heroesBuscador.filter(item => item.name.toLowerCase() === data.titulo.toLowerCase());

    // console.log(personaje);
    
    if (personaje.length > 0) {
        // console.log("Heroe encontrado")
        setIsVolver(true);
        setIBuscar(false);
        buscarHeroe(personaje);
        // console.log(heroesBuscador);
        e.target.reset();

    } else {
        // console.log("Heroe no encontrado")
        Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'HEROE NO ENCONTRADO',
            showConfirmButton: false,
            timer: 2300
          })
          e.target.reset();
    }   
}


const handleRefresh = () => {
    regresarHeroes(heroes);
}


      
    return ( 
    
    <div className="mt-5 container">

            <h1 className="text-white">Buscador SuperHeroes</h1>
                { 
                    heroesBuscador.length ?
                    (
                        <div className="container">
                        <div className="jumbotron">  
                            
                            <form 
                                className="text-center form-inline mb-5"
                                onSubmit={handleSubmit(onSubmit)}>
                                        
                                        <input 
                                            type="text" 
                                            className="form-control form-control-lg mx-auto mb-2 mr-sm-2 shadow-lg mb-4 bg-white rounded w-25" 
                                            id="heroe"   
                                            name="titulo"
                                            placeholder="Encuentra a tu Heroe"
                                            {...register("titulo", { required: true, message: "Campo Obligatorio"})}
                                      
                                        />


                                    <div className="d-flex justify-content-around">
                
                                        { isBuscar && 
                                            (<button 
                                            className="btn btn-warning btn-lg"
                                            type="submit"
                                            >
                                                    Buscar 
                                            </button>) }

                                        {/* { isVolver ?  */}
                                        <button 
                                                className="btn btn-warning btn-lg"
                                                onClick={handleRefresh}
                                            >
                                                Volver
                                        </button> 
                                                                           
                                    </div>
                            </form>

                            <div className="d-flex flex-wrap justify-content-center">   

                                { 
                                    ( heroesBuscador.map ( img  => (
                                        <CardHero
                                            key={img.id}
                                            img={img}
                                        />
                                    ))
                                    )
                                }

                            </div>
                        
                        </div> 

                    </div>

                    ) :

                        <div className="d-flex justify-content-around"> 
                            <div className="spinner-border text-warning" role="status">
                                    <span className="sr-only"></span>
                            </div>
                        </div>

                    }
    </div>
     );

}
 
export default Buscador;
















                  