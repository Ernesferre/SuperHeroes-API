import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import CardHero from './CardHero';
import { useForm } from 'react-hook-form';
import AppContext from '../AppContext/AppContext';
import { useHistory } from "react-router-dom";





const Buscador = () => {

    const history = useHistory();

    const context = useContext(AppContext);

    const [isVolver, setIsVolver] = useState(false)
    const [isBuscar, setIBuscar] = useState(true)


    const {heroesBuscador, consultarApi, buscarHeroe } = context

    // console.log(heroes);

    
    // const [ elegido, setElegido] = useState({});
    // const [ inputValue , setInputValue] = useState('');
    // const [ nuevoIntegrante , setNuevoIntergante] = useState ([]);
    

    const {register, errors, handleSubmit} = useForm();

    
    useEffect(() => {
        consultarApi();
        
        console.log(heroesBuscador)
    }, []);

    

   

        // console.log(heroes);




const onSubmit = (data, e) => { 
    e.preventDefault()
    setIsVolver(true);
    setIBuscar(false);
    console.log(data.titulo)
    // const personaje = heroes.filter(item => item.name.toLocaleLowerCase().includes (data.titulo));
    const personaje = heroesBuscador.filter(item => item.name === data.titulo);
    console.log(personaje);

    buscarHeroe(personaje);
    console.log(heroesBuscador);

    // setHeroes(personaje);
    // console.log(elegido)
    e.target.reset();
    
}



const handleRefresh = () => {

    history.push("/Buscador");

    // const todosLosHeroes = [...heroes]
    // console.log(todosLosHeroes)
    // // con esta funcion debo lograr volver a mostrar todos los personajes
    // regresarHeroes(todosLosHeroes);
    // console.log(heroesBuscador);
    // console.log("Click")
}

const handleClick = () => {
// Aqui debo poder agregar a un nuevo array  [] (heroe ) si el usuario da Click en agregar nuevo integrante

}
      


    return ( 
    
    <div>

            <h1 className="text-white">Buscador SuperHeroes</h1>

                { 
                    heroesBuscador.length ?

                        (
                            <div className="container">
                        <div className="jumbotron">  

                            

                            
                        
                            
                            <form 
                                className="text-center mb-5"
                                onSubmit={handleSubmit(onSubmit)}>


                                    {/* <label> */}
                                    
                                    {/* <h1> {user} </h1> */}
                                        
                                        <input 
                                            type="text" 
                                            className="form-control my-2 shadow-lg p-3 mb-2 bg-white rounded" 
                                            id="heroe"  
                                            // value = { inputValue } 
                                            name="titulo"
                                            placeholder="Encuentra a tu Heroe"
                                            // onChange={handleChange} 
                                            {...register("titulo", { required: true, message:'Campo Obligatorio'})}
                                        />

                                    <span className="text-danger text-small d-block mb-2">
                                        {/* {errors?.titulo?.message} */}
                                        {errors?.titulo?.message}
                                    </span>

                                    <div className="d-flex justify-content-around">
                
                                        { isBuscar && <button 
                                            className="btn btn-warning btn-lg"
                                            type="submit"
                                        >
                                                Buscar 
                                        </button> }


                                        { isVolver && <button 
                                                className="btn btn-primary"
                                                onClick={handleRefresh}
                                            >
                                                Volver
                                        </button> }

                                        
                                        
                                        

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
                    
                    <button className="btn btn-primary btn-lg text-center" disabled>
                        <span className="spinner-border spinner-border-sm"></span>
                        
                    </button>
                }
                

                    


                {/* {isLogin &&
                <label>Felicitaciones !!!! Ingresaste a HOME </label>
                } */}

                    

    </div>
     );

}
 
export default Buscador;




                    // {  {elegido} ?  
                     
                    //     (elegido.map (item => (
                    //         <li
                    //             key= {item.id} 
                    //             img= {item.image}
                    //             name= {item.name}
                    //         >    
                    //         </li>

                    //  )) )
                     
                    //  : 
                     
                    //     ( heroes.map ( img  => (
                    //         <CardHero
                    //             key={img.id}
                    //             img={img}
                    //         />
                    //     ))
                    //     )
                    // }













                    // .featuredProducts ul {
                    //     display: flex;
                    //     flex-wrap: wrap;
                    //     justify-content: center;
                        
                    //   }
                      
                    //   .featuredProducts ul li {
                    //     width: 20%;
                    //     list-style: none;
                    //   }