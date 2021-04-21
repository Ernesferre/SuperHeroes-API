import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import CardHero from './CardHero';
import { useForm } from 'react-hook-form';
// import {InfoContext}  from '../Context/index'



const Buscador = () => {

    
    const [ heroes , setHeroes ] = useState([]);
    const [ elegido, setElegido] = useState({});
    // const [ inputValue , setInputValue] = useState('');
    // const [ nuevoIntegrante , setNuevoIntergante] = useState ([]);
    

    const {register, errors, handleSubmit} = useForm();

    
    useEffect(() => {
        consultarApi();
        console.log("API consumida")
    }, []);

    

    const consultarApi = async() => {
        
        const url = 'https://akabab.github.io/superhero-api/api/all.json';
        
        
        const respuesta = await axios.get ( url );
        const response = (respuesta.data);
        
        const datos = response.map ( img => {
            return {                
                id: img.id,
                name: img.name,
                image: img.images.sm,        
            }
        })

        


        // console.log(datos)
        setHeroes( datos );
        
        
}

        console.log(heroes);




const onSubmit = (data, e) => { 
    console.log(data.titulo)
    const personaje = heroes.filter(item => item.name === data.titulo);
    console.log(personaje);
    setHeroes(personaje);
    console.log(heroes)
    e.target.reset();
    
}

const handleRefresh = () => {
    // con esta funcion debo lograr volver a mostrar todos los personajes
    console.log("Click")
}

const handleClick = () => {
// Aqui debo poder agregar a un nuevo array  [] (heroe ) si el usuario da Click en agregar nuevo integrante

}
      


    return ( 
        

        <div className="container">
            <div className="jumbotron">  

                <h1>Buscador SuperHeroes</h1>

                
               
                
                <form 
                    className="text-center mb-5"
                    onSubmit={handleSubmit(onSubmit)}>


                        {/* <label> */}
                        
                        {/* <h1> {user} </h1> */}
                            
                            <input 
                                type="text" 
                                className="form-control my-2" 
                                id="heroe"  
                                // value = { inputValue } 
                                name="titulo"
                                placeholder="Ingresar Heroe"
                                // onChange={handleChange} 
                                {...register("titulo", { required: true, message:'Campo Obligatorio'})}
                            />

                        <span className="text-danger text-small d-block mb-2">
                            {/* {errors?.titulo?.message} */}
                            {errors?.titulo?.message}
                        </span>

                        
      
                        <button className="btn btn-primary ml-2">Consultar</button>
                        <button 
                            className="btn btn-primary ml-2"
                            onClick={handleRefresh}
                        >
                            Volver
                        </button>
                </form>

                    

                     { 
                        ( heroes.map ( img  => (
                            <CardHero
                                key={img.id}
                                img={img}
                            />
                        ))
                        )
                    }
            
            </div> 

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