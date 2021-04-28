import React from 'react'
import AppContext from '../AppContext/AppContext'
import {useContext, useEffect, useState } from 'react'

const TeamIndicators2 = () => {

    const context = useContext(AppContext);
    const [pesosProm, setPesosProm] = useState()
    const [alturaProm, setAlturaProm] = useState()

    const { equipo } = context

    console.log(equipo[0].appearance.weight[1]);

    
        // Construyo un nuevo array con los pesos de cada integrante
    const calculoPromedios = () => {
       
        // const array_pesos = equipo.map( item => {
        //     return parseFloat(item.appearance.weight[1]);   
        // });
        // console.log(array_pesos)

        // console.log(array_Pesos.reduce(reducer, 0));

        const array_Pesos = equipo.reduce((pesoTotal,item) => {
            return pesoTotal + parseFloat(item.appearance.weight[1]);   
        },0);
        setPesosProm((array_Pesos/equipo.length).toFixed());
        console.log(pesosProm);

        const array_alturas = equipo.reduce((alturaTotal,item) => {
            return alturaTotal + parseFloat(item.appearance.height[1]);   
        },0);
        setAlturaProm((array_alturas/equipo.length).toFixed());
        console.log(alturaProm);
    }




        // const numerosSolos =  parseFloat(array_Pesos)
        // console.log(numerosSolos);

        // const pesoTotal = equipo.reduce((total, integrante) => {
        //     return total + parseFloat(integrante.appearance.weight[1], 0);
        // })
        // console.log(pesoTotal)

        //     setPesosProm(pesoTotal/equipo.length);
        //    console.log(pesosProm);
    

    // array_pesos =  [90, 441, 0, 72, 68, 83]

    
    
    
    useEffect(() => {
        calculoPromedios();     
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
