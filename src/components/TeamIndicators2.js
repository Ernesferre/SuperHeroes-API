import React from 'react'
import AppContext from '../AppContext/AppContext'
import {useContext, useEffect, useState } from 'react'

const TeamIndicators2 = () => {

    const context = useContext(AppContext);
    const [pesosProm, setPesosProm] = useState()
    const [alturaProm, setAlturaProm] = useState()

    const { equipo } = context

    // console.log(equipo[0].appearance.weight[1]);

    
    // Construyo un nuevo array con los pesos de cada integrante
    const calculoPromedios = () => {

        const array_Pesos = equipo.reduce((pesoTotal,item) => {
            return pesoTotal + parseFloat(item.appearance.weight[1]);   
        },0);
        setPesosProm((array_Pesos/equipo.length).toFixed());
        // console.log(pesosProm);

        const array_alturas = equipo.reduce((alturaTotal,item) => {
            return alturaTotal + parseFloat(item.appearance.height[1]);   
        },0);
        setAlturaProm((array_alturas/equipo.length).toFixed());
        // console.log(alturaProm);
    }

    useEffect(() => {
        calculoPromedios();
        // eslint-disable-next-line react-hooks/exhaustive-deps     
    }, [equipo]);
    

    return (
        <div>
            <h3 className="text-white ">Pesos y Alturas Promedio</h3>

            <ul className="list-group list-group-flush bg-warning mb-3">

                                <li className="list-group-item bg-warning"><b> Pesos Promedios : </b> {pesosProm} Kgs </li>
                                <li className="list-group-item bg-success"><b> Alturas Promedios : </b> {alturaProm} Cms </li>
                                 

            </ul>        
            
        </div>
    )
}

export default TeamIndicators2
