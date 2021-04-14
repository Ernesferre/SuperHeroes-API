import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
// // import { HeroCard } from './HeroCard';
// import {InfoContext}  from '../Context/index'



const Home = () => {
  const [ characters, setCharacters] = useState([]);

  // const infoContext = useContext(InfoContext);
  //   console.log(infoContext);

  // const [ datas , setDatas ] = useCotext (Info);

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
    
   

    useEffect(() => {
        (async () => {
          const charactersData = await fetchCharacters();
          setCharacters(charactersData);
          // console.log(characters);
        })();
      }, []);

    const fetchCharacters = async () =>
    (await axios.get('https://akabab.github.io/superhero-api/api/all.json')).data;

    // console.log(characters);
    // setDatas(characters);
    // console.log(datas);


    return ( 

        <div> 

            <h1>Equipo</h1>
            
            <div className="card-columns">
          
        
            </div>
        



        </div>
     );
}
 
export default Home;
