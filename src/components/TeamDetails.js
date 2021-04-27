import React from 'react'
import AppContext from '../AppContext/AppContext';
import { useContext } from 'react';


const TeamDetails = () => {

    // console.log(img.name);

    const context = useContext(AppContext);

    const { hero } = context

    

    // visualizarHeroe(img);

    console.log(hero);
   

    return (
        <>
        
        <h1 className="text-white"> {hero.name}  </h1>

            
            <div className="mt-5 d-flex justify-content-center">
                    <div className="col-4 text-center mr-3 p-2">
                        <img 
                            src={hero.images.md}
                            alt= {hero.name}
                            className="img-thumbnail"
                    
                        ></img>
                    
                    </div>


            

            
                    <div className=" col-6 text-white ml-3 mr-3">
                            {/* <h2 className="text-center text-white">{hero.name}</h2> */}
                            <h3 className="text-center text-white mb-2"> POWERSTATS: </h3>
                            <ul className="list-group list-group-flush bg-warning">

                                {/* <li className="list-group-item bg-warning"><b> Intelligence: </b> {hero.powerstats.intelligence} </li> */}
                                <li className="list-group-item bg-success"><b> Strength: </b> {hero.powerstats.strength} </li>
                                <li className="list-group-item bg-warning"><b> Speed: </b> {hero.powerstats.speed} </li>
                                <li className="list-group-item bg-success"><b> Durability: </b>{hero.powerstats.durability} </li>
                                <li className="list-group-item bg-warning"><b> Power </b> {hero.powerstats.power} </li>
                                <li className="list-group-item bg-success"><b> Combat </b> {hero.powerstats.combat} </li>

                            </ul>

                            <h3 className="text-center text-white mt-3"> Other Features </h3>

                            <ul className="list-group list-group-flush bg-warning">

                                {/* <li className="list-group-item bg-warning"><b> Intelligence: </b> {hero.powerstats.intelligence} </li> */}
                                <li className="list-group-item bg-success"><b> Weight: </b> {hero.appearance.weight[1]} </li>
                                <li className="list-group-item bg-warning"><b> Height: </b> {hero.appearance.height[1]} </li>
                                <li className="list-group-item bg-success"><b> Complete Name: </b>{hero.biography.fullName} </li>
                                <li className="list-group-item bg-warning"><b> Alias: </b> {hero.powerstats.power} </li>
                                <li className="list-group-item bg-success"><b> Eyes Color: </b> {hero.appearance.eyeColor} </li>
                                <li className="list-group-item bg-warning"><b> Hair Color: </b> {hero.appearance.hairColor} </li>
                                <li className="list-group-item bg-success"><b> Place of work: </b> {hero.work.base} </li>

                            </ul>



                    </div>

            </div>

            
        
        </>
    )
}

export default TeamDetails


{/* <li> Intelligence </li>
  <li> Strength </li>
  <li> </li>
  <li> Durability </li>
  <li> Power </li>
  <li> Combat </li> */}