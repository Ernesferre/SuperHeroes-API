import axios from 'axios';
import { useState, useEffect} from 'react';
import CardHero from './CardHero';



const Equipo = () => {
  
// const [equipo, setEquipo] = useState([])
  

//     useEffect(() => {
//       consultarApi();
//       console.log("API consumida")
//     }, []);
  
//   const consultarApi = async() => {
        
//     const url = 'https://akabab.github.io/superhero-api/api/all.json';
    
//     const respuesta = await axios.get ( url );
//     const response = (respuesta.data);
    
//     const datos = response.map ( img => {
//         return {                
//             id: img.id,
//             name: img.name,
//             image: img.images.sm,
//             powerstats: img.powerstats,
//             // alignment: img.alignment

//         }
//     })


//     console.log(datos)
//     setEquipo( datos );
//     console.log(equipo)
    
    
// }


    return (
    <div>
        <div className="container d-flex flex-column justify-content-center"> 

            <h1 className="text-white justify-content-center justify-content-center">Equipo</h1>

            <h3 className="text-white text-center">En esta seccion debo poder visualizar los 6 Heroes seleccionados</h3>
                
        </div>

        {/* <div className="d-flex flex-wrap justify-content-center">   

            { 
              ( equipo.map ( img  =>  (  
                  <CardHero
                      key={img.id}
                      img={img}
                  />
              ))
              )
            }

        </div> */}
      </div>
       
     );
}
 
export default Equipo;
