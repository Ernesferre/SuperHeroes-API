import React from 'react'
import {useContext, useEffect, useState } from 'react'
import AppContext from '../AppContext/AppContext'


const TeamIndicators = () => {

    const context = useContext(AppContext);

    const [totalInt, setTotalInt] = useState()
    const [totalStr, setTotalStr] = useState()
    const [totalSp, setTotalSp] = useState()
    const [totalDu, setTotalDu] = useState()
    const [totalPo, setTotalPo] = useState()
    const [totalCo, setTotalCo] = useState()
    const [array, setArray] = useState([]);


    const { equipo } = context


    const calculoPowerstats = () => {
            
        const Total1 = equipo.reduce((total, integrante) => {
                return total + integrante.powerstats.intelligence; }, 0);
        setTotalInt(Total1);
        // console.log(totalInt);

        //////////////////////////////////////////////////////////////

        const Total2= equipo.reduce((total, integrante) => {
            return total + integrante.powerstats.strength; }, 0);
        setTotalStr(Total2);
        // console.log(totalStr);

        /////////////////////////////////////////////////////////////

        const Total3= equipo.reduce((total, integrante) => {
            return total + integrante.powerstats.speed; }, 0);
        setTotalSp(Total3);
        // console.log(totalSp);
        
        /////////////////////////////////////////////////////////////

        const Total4= equipo.reduce((total, integrante) => {
            return total + integrante.powerstats.durability; }, 0);
        setTotalDu(Total4);
        // console.log(totalDu);

        /////////////////////////////////////////////////////////////

        const Total5= equipo.reduce((total, integrante) => {
            return total + integrante.powerstats.power; }, 0);
        setTotalPo(Total5);
        // console.log(totalPo);

        ///////////////////////////////////////////////////////////////

        const Total6= equipo.reduce((total, integrante) => {
            return total + integrante.powerstats.combat; }, 0);
        setTotalCo(Total6);
        // console.log(totalCo);
 
        //////////////////////////////////////////////////////////////

        const newData = {           
            intelligence: totalInt,
            strength: totalStr,
            speed: totalSp,
            durability: totalDu,
            power: totalPo,
            combat: totalCo       
        }
        setArray([newData])
    }

    // console.log(array)


    useEffect(() => {
        calculoPowerstats(); 
        // console.log(equipo);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [equipo]);


    return (
        
        <div className="mb-4">
            
            <h3 className="text-white">Acumulados de Powerstats</h3>
            
            <ul className="list-group list-group-flush bg-warning mb-3">

                                <li className="list-group-item bg-warning"><b> Inteligencia Total : </b> {totalInt} </li>
                                <li className="list-group-item bg-success"><b> Fuerza Total : </b> {totalStr} </li>
                                <li className="list-group-item bg-warning"><b> Velocidad Total: </b> {totalSp} </li>
                                <li className="list-group-item bg-success"><b> Durabilidad Total : </b>{totalDu} </li>
                                <li className="list-group-item bg-warning"><b> Poder Total : </b> {totalPo} </li>
                                <li className="list-group-item bg-success"><b> Combate Total : </b> {totalCo} </li>  

            </ul>        
             
        </div>
    )
}

export default TeamIndicators
