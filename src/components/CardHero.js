import React, {useContext } from 'react'
import AppContext from '../AppContext/AppContext'



const CardHero = ({img } ) => {

    const context = useContext(AppContext);

    const { heroes, agregarAlEquipo } = context
    
    // console.log(img.name)

    const handleClick = (id) => {
        const heroe = heroes.find( personaje => personaje.id === id)
        console.log(heroe);
        agregarAlEquipo(heroe);
        console.log("Heroe Elegido");
        // cuando el usuario hace click debo poder ingresar el objeto a un nuevo Array que discho array se me muestre en la pantalla de Equipo;
        
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
