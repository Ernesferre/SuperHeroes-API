import React from 'react'


const CardHero = ({img } ) => {
    
    // console.log(img.name)

    const handleClick = () => {
        console.log("Heroe Elegido");
        // console.log(data);
        
    }
    
    return (
        <div className="card ms-3 mb-3 d-flex flex-wrap" style={ { maxWidth: 200 }}>
            {/* <div className="row no-gutters"> */}
                {/* <div className="col-md-10"> */}

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

                {/* </div> */}
            {/* </div>  */}
        </div>
    )
}

export default CardHero;
