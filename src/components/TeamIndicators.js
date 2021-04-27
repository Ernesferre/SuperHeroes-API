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
    const [array, setArray] = useState({});


    const { equipo } = context


    
    



    const calculoPowerstats = () => {
            
        const Total1 = equipo.reduce((total, integrante) => {
                return total + integrante.powerstats.intelligence; }, 0);
        setTotalInt(Total1);
        console.log(totalInt);

        // const newData1 = {
        //     intelligence: totalInt}
        // setArray([...array, newData1 ])

        //////////////////////////////////////////////////////////////

        const Total2= equipo.reduce((total, integrante) => {
            return total + integrante.powerstats.strength; }, 0);
        setTotalStr(Total2);
        console.log(totalStr);

        // const newData2 = {
        //     strength: totalStr}
        // setArray([...array, newData2 ])


        /////////////////////////////////////////////////////////////


        const Total3= equipo.reduce((total, integrante) => {
            return total + integrante.powerstats.speed; }, 0);
        setTotalSp(Total3);
        console.log(totalSp);
        
        // const newData3 = {
        //     speed: totalSp}
        // setArray([...array, newData3 ])

        /////////////////////////////////////////////////////////////

        const Total4= equipo.reduce((total, integrante) => {
            return total + integrante.powerstats.durability; }, 0);
        setTotalDu(Total4);
        console.log(totalDu);

        // const newData4 = {
        //     durability: totalDu}
        // setArray([...array, newData4 ])

        /////////////////////////////////////////////////////////////

        const Total5= equipo.reduce((total, integrante) => {
            return total + integrante.powerstats.power; }, 0);
        setTotalPo(Total5);
        console.log(totalPo);
        
        // const newData5 = {
        //     power: totalPo}
        // setArray([...array, newData5 ])

        ///////////////////////////////////////////////////////////////

        const Total6= equipo.reduce((total, integrante) => {
            return total + integrante.powerstats.combat; }, 0);
        setTotalCo(Total6);
        console.log(totalCo);
        
        // const newData6 = {
        //     combat: totalCo}
        // setArray([...array, newData6 ])

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

        // console.log(array)
    }

    console.log(array)


    useEffect(() => {
        calculoPowerstats(); 
        console.log(equipo);
    }, [equipo]);

    // setArray(array.sort());
    // console.log(array);


    return (
        
        <div className="mb-4">
            
            <h2 className="text-white">Indicadores de tu Equipo</h2>


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
