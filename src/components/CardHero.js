import React, {useContext } from 'react'
import AppContext from '../AppContext/AppContext'
import Swal from 'sweetalert2'




const CardHero = ({ img } ) => {

    

    const context = useContext(AppContext);

    const { heroes, agregarAlEquipo, equipo, visualizarHeroe } = context
    
    

    const handleClick = (id) => {

        const actualId = id
        console.log(actualId);
        const exist = equipo.some(items => items.id === actualId);
        if (exist) {
            console.log("El Heroes SI encuentra dentro del equipo")
            Swal.fire({
                position: 'center',
                icon: 'warning',
                title: 'Este Hereo ya Fue Agregado, intenta con otro ! ',
                showConfirmButton: false,
                timer: 2300
              })
            } else {

            console.log("El Heroes NO encuentra dentro del equipo")
            if (equipo.length < 6) {

                const heroe = heroes.find( personaje => personaje.id === id)
                console.log(heroe);
                agregarAlEquipo(heroe);
                // visualizarHeroe(id);
                
                console.log("Heroe Elegido");
                console.log(equipo);
    
                Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `Heroe numero ${equipo.length + 1} agregado ! `,
                        showConfirmButton: false,
                        timer: 1800
                      })
    
                      
                
                
    
                
                // history.push("/Equipo");
            } else if  (equipo.length === 5) {
                Swal.fire({
                    position: 'center',
                    icon: 'warning',
                    title: 'Ya completaste los 6 Heroes',
                    showConfirmButton: false,
                    timer: 2300
                  })
                    
                } else {   
                
                console.log("Legaste al limite")
                Swal.fire({
                    icon: 'error',
                    title: 'UPS',
                    text: 'Lo Siento, ya has agregado a tus 6 heroes',
                    // footer: '<a href={`/Equipo`} > Ver Equipo </a>',
                  })
                
                }
            } 
        
        
        }
    
    return (
        
        
        
            <div className="card ms-3 mb-3 d-flex flex-wrap bg-success p-2" style={ { maxWidth: 150 }}>
            

                    <div className="card-body">
                        <p className="card-title text-center mt-3"> {img.name} </p> 
                    </div>
            
                        <img  src={img.images.md} alt={ img.name } className="card-img img-thumbnail" />  

                        <div className="card-body text-center mb-3">               
                            <button 
                                    className="btn btn-warning card-text text-center"
                                    onClick= {() => handleClick(img.id)}
                                    
                                    >Agregar a Equipo
                            </button>
                        </div>

                    
            </div>
    )
}

export default CardHero;
