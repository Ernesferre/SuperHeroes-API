import React from 'react';
import { useContext } from 'react';
import AppContext from '../AppContext/AppContext';
import CardEquipo from './CardEquipo';
import {Link} from 'react-router-dom';
import TeamIndicators from './TeamIndicators';
import TeamIndicators2 from './TeamIndicators2';

const Equipo = () => {
  
    const context = useContext(AppContext);

    const { equipo } = context

    // console.log(equipo);

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
                          <div className="row d-flex justify-content-center">
                            <div className="col ">
                              <h2 className="text-lg text-warning  p-2 mt-5 display-3">Elegi Tu Equipo de Heroes Preferidos </h2>,
                              <Link to={`/Buscador`} className="btn btn-warning btn-lg p-2 text-center w-50 p-4 d-block mx-auto">COMENZAR</Link>
                            </div>
                          </div>
          }

        </div>

          <div className="mt-5 d-flex justify-content-center ">
              
            <div className=" p-5">  
              { 
                  equipo.length ?
                  ( <TeamIndicators/>
                    )  : 
                    
                    null             
              }   
            </div>

            <div className=" p-5">
              { 
                  equipo.length ?
                   <TeamIndicators2/>
                      : 
                    null              
              }
            </div>
          </div> 

      </div>       
     );
}
 
export default Equipo;


