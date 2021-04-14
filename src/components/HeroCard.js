import React from 'react'
import {useState} from 'react'
// import {InfoContext}  from '../Context/index'

export const HeroCard = (person) => {

    // const [ datas , setDatas ] = useContext(Info);

    const [ nuevoIntegrante, setNuevoIntegrante ] = useState([]);

    // console.log(person);

    // let hola = typeof(person);
    // console.log(hola);

    // const { info } = useContext(InfoContext);
    // console.log(info);

    // console.log(datas);

    const addToTeam = (IdElegido) => {
    
        const persona = person.filter(item  => item.id === IdElegido);
    
        console.log(persona);
        // setNuevoIntegrante(personaje);
        // console.log(nuevoIntegrante);
        }

    

    return (

        
        <div className="card ms-3 mt-3" style={{ maxWidth: 540 }} >
            <div className="row -no-gutters">
                
                <div className="col-md-4">
                    <img src={person.images.sm} className="card-img" alt={person.name} />
                </div>
                
                <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title">{person.name}</h2>
                            {/* <p className="card-text"> Combat: {powerstats.combat} </p> */}
                        
                            <button 
                                className="btn btn-success align-center"
                                onClick= { () => addToTeam (`${person.id}`)}
                            >
                                Agregar a Equipo
                            </button>           
                        </div>
                </div>

            </div>           
        </div>
    )
}

