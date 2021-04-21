import React from 'react'


const CardHero = ({img } ) => {
    
    // console.log(img.name)

    const handleClick = () => {
        console.log("Heroe Elegido");
        // console.log(data);
        
    }
    
    return (
        <div className="card-grid">
            
            <p className="card-title"> {img.name} </p> 
      

            <img  src={img.image} alt={ img.name } />  
               
            
               
            <button 
                    className="btn btn-primary card-text"
                    onClick= {handleClick}
                >Agregar a Equipo
            </button>

            
        </div>
    )
}

export default CardHero;
