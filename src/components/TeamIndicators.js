import React from 'react'
import {useContext } from 'react'
import AppContext from '../AppContext/AppContext'




const TeamIndicators = () => {

    const context = useContext(AppContext);

    const {heroesBuscador, consultarApi, buscarHeroe, regresarHeroes, heroes, equipo } = context

    console.log(equipo)


    return (
        <div>
            <h2 className="text-white">Indicadores del Equipo</h2>
            
                
            
        </div>
    )
}

export default TeamIndicators
