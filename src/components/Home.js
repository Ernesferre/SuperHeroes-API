// import fondohome from '../../public/img/fondohome.jpg';
import axios from 'axios';
import { useState, useEffect } from 'react';



const Home = () => {

    // const [characters, setCharacters] = useState([]);

    // Metodo Udemy 

    // useEffect (() => {
    //     const getPeople = async ()=> {
    //     const respuesta = await axios('https://superheroapi.com/api/10159244794788658/character-id/')
    //     const resultado = await respuesta.json();
        
    //     setCharacters(resultado)
    //     console.log(resultado)
    //     }

    //     getPeople();
    //     console.log(characters)
    // },[])


    
    
    
    // Metodo Fede Profe  ------ NO Funciona
    
    // const [characters, setCharacters] = useState([]);

    // const getPeople = async ()=> {
    //     let response = await axios.get('https://superheroapi.com/api/10159244794788658/character-id/');
    //     setCharacters(response);
    //     console.log(characters);
    // }

    // console.log(characters);
    

    // useEffect (() => {
    //     getPeople();
    // },[])




    // Funciona !!!!!
    // --------------------------------------------------------------------
    
    const [ characters, setCharacters] = useState([]);

    useEffect(() => {
        (async () => {
          const charactersData = await fetchCharacters();
          setCharacters(charactersData);
          console.log(characters);
        })();
      }, []);

    const fetchCharacters = async () =>
    (await axios.get('https://akabab.github.io/superhero-api/api/all.json')).data;

    console.log(characters);


    return ( 

        <div> 

                <h1>SuperHeroes</h1>
            {
                characters.length ?
                characters.map(person =>  <h2 key={person.id}>{person.name} </h2>) :
                <p>Cargando Personajes...</p>
            }




        </div>
     );
}
 
export default Home;
