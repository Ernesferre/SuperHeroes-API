import react from 'react';
import { useContext } from 'react';
import AppContext from '../AppContext/AppContext';
import CardEquipo from './CardEquipo';
import {Link} from 'react-router-dom';
import TeamIndicators from './TeamIndicators';
import TeamDetails from './TeamDetails';



const Equipo = () => {
  
    const context = useContext(AppContext);

    const {heroesBuscador, buscarHeroe, regresarHeroes, heroes, equipo } = context

    console.log(equipo);




    return (
      <div>

        <h1 className="text-white"> Equipo </h1>

        <div className="d-flex flex-wrap justify-content-center"> 
        
        
        {
                equipo.length  ? 
                    
                        ( equipo.map ( img  => (
                            <CardEquipo
                                key={img.id}
                                img={img}
                            />
                            
                          ))          
                        )
                     :
                        <Link to={`/Buscador`} className="text-lg text-warning border border-warning p-2 mt-5">Elegi Tu Equipo de Heroes Preferidos</Link>
        }

        </div>

        <div className="mt-5">
              
              { 
                  equipo.length ?
                  ( <TeamIndicators/> )  : null
              
              }
        </div> 
        

                    

        


        




      </div>
       
     );
}
 
export default Equipo;



/* <div className="container d-flex flex-column justify-content-center"> 

<h1 className="text-white justify-content-center justify-content-center">Equipo</h1>

<h2 className="text-white text-center">Este seria el HOME de la app. En esta seccion debo poder visualizar los 6 Heroes seleccionados.</h2>
<h3 className="text-white text-center"> Cada item del Listado debe contener el NOMBRE del Heroe, su IMAGEN y sus POWERSTATS</h3>
<hr/>
<h3 className="text-white text-center list-group list-styled" > POWERSTATS:</h3>
<hr/>
<ul className="text-white  text-center type-circle mb-5 bg-primary">

  <li> Intelligence </li>
  <li> Strength </li>
  <li> Speed </li>
  <li> Durability </li>
  <li> Power </li>
  <li> Combat </li>


</ul>

<h3 className="text-white text-left mb-5 text-warning"> En esta pantalla se debera mostrar ademas:</h3>
<ol className="text-white type-circle">

  <li> Acumulativo de Powerstats, agrupados por cada uno, es decir... suma total de Inteligencia, Strenght, etc </li>
  <li> El Powerstats que mas acumulativo tenga debera apareecer arriba para categorizar el tipo de Equipo </li>
  <li> Pesos y Alturas Promedios del Equipo</li>
  <li> 3 miembros del equipo debera tener Orientacion "Buena" y los otros 3 "Mala". Esto debe validarse al intentar agregar un nuevo heroe </li>
  <li> Se debera Poder Eliminar un miembro del equipo, lo que generará un nuevo promedio de pesos y acumulativos de Powerstats  </li>
  


</ol>


    
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

</div> */