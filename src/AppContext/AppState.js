
import { useReducer } from 'react'
 
import AppReducer from "./AppReducer";
import AppContext from "./AppContext";
import { types }  from "../types/types" ;
import axios from 'axios';



const AppState = ({children} ) => {

    const initialState = {
        hero: {},
        heroes: [],
        equipo: [],
        heroesBuscador: [],
    }

    const [state, dispatch] = useReducer(AppReducer, initialState)

    const consultarApi = async() => {

        try {
            const url = 'https://akabab.github.io/superhero-api/api/all.json';
            const respuesta = await axios.get ( url );

        dispatch({
            type: types.get_heroes, payload: respuesta.data
        })
            
        } catch (error) {
            console.log(error)
            
        }
        
      
        
}

const buscarHeroe = async (personaje) => {
    dispatch ({
        type: types.buscar_heroe, payload: personaje 
    })
}

const regresarHeroes = async (heroes) => {
    dispatch({
        type: types.regresarHeroes, payload: heroes
    })
}

const agregarAlEquipo = async (heroe) => {
    console.log(heroe);
    dispatch({
        type: types.agregar_equipo, payload: heroe
    })
}

const eliminarHeroe = async (heroe) => {
    console.log(heroe);
    dispatch({
        type: types.eliminar_Heroe, payload: heroe
    })
}
const visualizarHeroe = async (heroe) => {
    // console.log(heroe);
    dispatch({
        type: types.visualizar_heroe, payload: heroe
    })
}


    
    return (
        <AppContext.Provider value= {{
            hero: state.hero,
            heroes: state.heroes,
            equipo: state.equipo,
            heroesBuscador: state.heroesBuscador,
            consultarApi,
            buscarHeroe,
            regresarHeroes,
            agregarAlEquipo,
            eliminarHeroe,
            visualizarHeroe
            


         }}>
            {children}
            
        </AppContext.Provider>
    )
}

export default AppState



  // const url = 'https://akabab.github.io/superhero-api/api/all.json';
        
        // const respuesta = await axios.get ( url );
        // const response = (respuesta.data);
        
        // const datos = response.map ( img => {
        //     return {                
        //         id: img.id,
        //         name: img.name,
        //         image: img.images.sm,        
        //     }
        // })  