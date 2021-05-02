
import { useReducer, useEffect } from 'react'
 
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
        token: localStorage.getItem('token') || null, 
        autenticado: false
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

const login = async (data) => {
    try {
        const Response = await axios.post("http://challenge-react.alkemy.org/",data)
        dispatch({
        type: types.login, payload: Response.data
    })
    console.log(Response);
    } catch (error) {
        
    }
}

const logout = () => {
    dispatch({type: types.logout})   
}



useEffect(() => {
    consultarApi(); 
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);




    
    return (
        <AppContext.Provider value= {{
            hero: state.hero,
            heroes: state.heroes,
            equipo: state.equipo,
            heroesBuscador: state.heroesBuscador,
            token: state.token,
            autenticado: state.autenticado,
            consultarApi,
            buscarHeroe,
            regresarHeroes,
            agregarAlEquipo,
            eliminarHeroe,
            visualizarHeroe,
            login,
            logout

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