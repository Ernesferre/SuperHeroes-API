import React from 'react'


const CardHero = ({img } ) => {
    
    // console.log(img.name)

    const handleClick = () => {
        console.log("Heroe Elegido");
        // cuando el usuario hace click debo poder ingresar el objeto a un nuevo Array que discho array se me muestre en la pantalla de Equipo;
        
    }
    
    return (
        <div className="card ms-3 mb-3 d-flex flex-wrap" style={ { maxWidth: 150 }}>
         

                <div className="card-body">
                    <p className="card-title text-center mt-3"> {img.name} </p> 
                </div>
        
                    <img  src={img.image} alt={ img.name } className="card-img img-thumbnail" />  

                    <div className="card-body text-center mb-3">               
                        <button 
                                className="btn btn-success card-text text-center"
                                onClick= {handleClick}
                                >Agregar a Equipo
                        </button>
                    </div>

                
        </div>
    )
}

export default CardHero;
