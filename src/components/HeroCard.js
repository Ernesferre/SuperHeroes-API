import React from 'react'
import { Link } from 'react-router-dom';

export const HeroCard = ({
    id,
    name,
    images,
    powerstats,

}) => {
    return (
        <div className="card ms-3 mt-3" style={{ maxWidth: 540 }} >
            <div className="row -no-gutters">
                <div className="col-md-4">
                    <img src={images.sm} className="card-img" alt={name} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p className="card-text"> Combat: {powerstats.combat} </p>
                        <p className="card-text"> Durability: {powerstats.durability} </p>  
                        <p className="card-text"> Inteligence: {powerstats.inteligence} </p>
                        <p className="card-text"> Power: {powerstats.power} </p>
                        <p className="card-text"> Speed: {powerstats.speed} </p>
                        <p className="card-text"> Strength: {powerstats.strength} </p>
                            
                    </div>
                    
                    <Link to={`./hero/${id}`}>
                        Mas...
                    </Link>

                </div>

            </div>
           
        </div>
    )
}
