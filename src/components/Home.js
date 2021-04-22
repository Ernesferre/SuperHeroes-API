import axios from 'axios';
import { useState, useEffect} from 'react';
// // import { HeroCard } from './HeroCard';
// import {InfoContext}  from '../Context/index'



const Home = () => {
  const [ characters, setCharacters] = useState([]);

  // const infoContext = useContext(InfoContext);
  //   console.log(infoContext);

  // const [ datas , setDatas ] = useCotext (Info);

    // const [characters, setCharacters] = useState([]);

    // Metodo Udemy 

  // const getImage =  async() => {
  
  //   const apiKey = '10159244794788658';
  //   const resp = await fetch(`https://superheroapi.com/api/${ apiKey }/character-id`);
  //   const data = await resp.json();

  //   console.log(data)

  // peticion
  //   .then( resp => resp.json() )
  //   .then( ({ data }) => {
  //       const { url } = data;
        

  //       console.log(url)
        // const img = document.createElement('img');
        // img.src = url;

        // document.body.append( img );


 
  // }

  // getImage();

    
    
    
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

        <div className="container"> 

            <h1>Equipo</h1>

            <h3>En esta seccion debo poder visualizar los 6 Heroes seleccionados</h3>
            
            <div className="card-columns">
          
        
            </div>
        



        </div>
     );
}
 
export default Home;
