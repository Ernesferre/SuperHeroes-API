import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { HeroCard } from './HeroCard';
// import {InfoContext}  from '../Context/index'

const Buscador = () => {

    // const [busqueda, setBusqueda ] = useState('');
    const [heroes, setHeroes] = useState([]);
    const [ user , setUser] = useState ('');
    // const [nuevoIntegrante, setNuevoIntegrante] = useState([]);

    // Fernando Herrera
    // const infoContext = useContext(InfoContext);
    // console.log(heroes)
    
    
    // Buscador de info en API
    useEffect(() => {
        const consultarApi = async () => {
        const respuesta = await axios.get('https://akabab.github.io/superhero-api/api/all.json');
        const response = (respuesta.data);
        setHeroes(response);
        }
      consultarApi();
      }, []);

    // console.log(heroes);

    function handleSubmit (e)  {
        e.preventDefault();
        console.log(user);
        const personaje = heroes.filter(item => item.name === user);
        console.log(personaje);
        setHeroes(personaje);
    }  

    
    

    
    function handleChange (name,value) {
            if (name === 'name') {
            setUser(value);
            console.log(user);
    }}


    return ( 
        

        <div className="container">
            <div className="jumbotron">  

                <h1>Buscador SuperHeroes</h1>
               
                
                <form className="text-center mb-5">
                    <label>
                        
                        <input 
                            type="text"  
                            id="heroe"   
                            name="name"
                            placeholder="Ingresar Heroe"
                            onChange={(e) => handleChange(e.target.name, e.target.value)} 
                        />
                    </label>
                    
                    <input 
                        type="submit" 
                        value="Buscar"
                        onClick={handleSubmit}
                        
                     />
                </form>

                {
            
                    heroes.map( person => (
                    <HeroCard key={person.id}
                        {...person}
                    />
                    ))  

                }

                
                
                
               
                
                



               

            
            

            
            
                
            
            </div> 

        </div>
     );

}
 
export default Buscador;