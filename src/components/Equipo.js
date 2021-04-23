import axios from 'axios';
import { useState, useEffect} from 'react';



const Equipo = () => {
  const [ characters, setCharacters] = useState([]);

 
   

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

        <div className="container d-flex flex-column justify-content-center"> 

            <h1 className="text-white justify-content-center justify-content-center">Equipo</h1>

            <h3 className="text-white d-flex flex-md-column justify-content-center">En esta seccion debo poder visualizar los 6 Heroes seleccionados</h3>
            
            <div className="card-columns">
          
        
        </div>
        



        </div>
     );
}
 
export default Equipo;
