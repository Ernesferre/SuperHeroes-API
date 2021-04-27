
import { types } from '../types/types';

const AppReducer = (state, action) => {
  switch (action.type) {
      case types.get_heroes:
          return {
              ...state, 
              heroes: action.payload, 
              heroesBuscador: action.payload
          }

        case types.buscar_heroe: 
          return {
              ...state,
              heroesBuscador: action.payload.length > 0 ? action.payload : state.heroes
          }
          case types.regresarHeroes:
            return {
                ...state,
                heroesBuscador: action.payload
            }
            case types.agregar_equipo:
                console.log(action.payload)
            return {
                ...state,
                equipo: [...state.equipo, action.payload]
            }
            case types.visualizar_heroe:
                console.log(action.payload)
            return {
                ...state,
                hero:  action.payload
            }

            // case types.eliminar_Heroe:
            //     console.log(action.payload)
            // return {
            //     ...state,
            //     equipo: [...state.equipo, action.payload]
            // }
            


  
      default:
          return state;
  }
}

export default AppReducer
