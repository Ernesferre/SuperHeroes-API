import { useState, useEffect, useContext } from 'react';
import CardHero from './CardHero'
import AppContext from '../AppContext/AppContext';
import { useHistory } from "react-router-dom";
import Swal from 'sweetalert2';


const Buscador = () => {

    const history = useHistory();

    const context = useContext(AppContext);

    const [isVolver, setIsVolver] = useState(false)
    const [isBuscar, setIBuscar] = useState(true)
    const [busqueda, setbusqueda] = useState('')

    const {heroesBuscador, consultarApi, buscarHeroe } = context
    
    // const {register, errors, handleSubmit} = useForm();

    useEffect(() => {
        consultarApi(); 
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    

const handleSubmit = (e) => { 
    e.preventDefault()
    
    // if (data.titulo) {
    //     console.log("Heroe Ingresado")
    // } else {
    //     console.log("Campo Obligatorio")
    // }
  
   
    const personaje = heroesBuscador.filter(item => item.name.toLowerCase() === busqueda.toLowerCase());

    console.log(personaje);
    
    if (personaje.length > 0) {
        console.log("Heroe ENCONTRADO")
        setIsVolver(true);
        setIBuscar(false);
        buscarHeroe(personaje);
        console.log(heroesBuscador);
        e.target.reset();

    } else {
        console.log("personaje no encontrado")
        Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'HEROE NO ENCONTRADO',
            showConfirmButton: false,
            timer: 2300
          })
          e.target.reset();
    }   
}

const handleRefresh = () => {
    history.push("/Buscador");
}

const handleChange = (e) => {
    setbusqueda(e.target.value)
}

      
    return ( 
    
    <div className="mt-5 container">

            <h1 className="text-white">Buscador SuperHeroes</h1>
                { 
                    heroesBuscador.length ?
                    (
                        <div className="container">
                        <div className="jumbotron">  
                            
                            <form 
                                className="text-center form-inline mb-5"
                                onSubmit={handleSubmit}>
                                        
                                        <input 
                                            type="text" 
                                            className="form-control form-control-lg mx-auto mb-2 mr-sm-2 shadow-lg mb-4 bg-white rounded w-25" 
                                            id="heroe"   
                                            name="titulo"
                                            placeholder="Encuentra a tu Heroe"
                                            onInput={handleChange} 
                                            // value={busqueda}
                                            // {...register("titulo", { required: true, message: "Campo Obligatorio"})}
                                            // ref={
                                            //     register({
                                            //         required: {value: true, message: 'Nombre Obligatorio'}
                                            //     })
                                            // }
                                        />

                                            <span className="text-danger text-small d-block mb-2">
                                                {/* {errors.titulo} */}
                                            </span>

                                    <div className="d-flex justify-content-around">
                
                                        { isBuscar && 
                                            (<button 
                                            className="btn btn-warning btn-lg"
                                            type="submit"
                                            >
                                                    Buscar 
                                            </button>) }

                                        { isVolver && <button 
                                                className="btn btn-primary"
                                                onClick={handleRefresh}
                                            >
                                                Volver
                                        </button> }
                                                                                
                                  </div>
                            </form>

                            <div className="d-flex flex-wrap justify-content-center">   

                                { 
                                    ( heroesBuscador.map ( img  => (
                                        <CardHero
                                            key={img.id}
                                            img={img}
                                        />
                                    ))
                                    )
                                }

                            </div>
                        
                        </div> 

                    </div>

                    ) :

                        <div className="d-flex justify-content-around"> 
                            <div class="spinner-border text-warning" role="status">
                                    <span class="sr-only"></span>
                            </div>
                        </div>

                    }
    </div>
     );

}
 
export default Buscador;
















                  