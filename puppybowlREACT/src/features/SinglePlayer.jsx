import React from "react";

import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import {handleRemove , fetchSinglePlayer } from "../API/index";

const singlePlayer = () => {
    const [singlePlayer, setSinglePlayer] = useState ({});
    const [error, setError] = useState(null);

    const params= useParams();
    const playerID = params.id;
    console.log("player id", playerID);

    useEffect(()=>{
        async function fetchSinglePlayerData(playerID){
           const singlePlayerData = await fetchSinglePlayer(playerID);
           if( singlePlayerData instanceof Error){
                setError(singlePlayerData)
           }
           console.log("from the fetch single data" ,singlePlayerData)
           setSinglePlayer(singlePlayerData);
        }
        fetchSinglePlayerData();
    }, []);

    return(
    <div className="singlePlayerContainer">
        {error && !singlePlayer && (<p>Failed to load single player card.</p>)}
        <div className="singlePlayerCard">
            <div className="playerImageContainer">
                <img src={singlePlayer.imageUrl} alt={singlePlayer.name} className="playerImage"></img>
            </div>
            <div className="playerDetails">
                <h3>{singlePlayer.name}</h3>
                <p><b>Breed:</b> {singlePlayer.breed}</p>
                <p><b>Status:</b> {singlePlayer.status}</p>

                <button onClick={() => {handleRemove(singlePlayer.id)}}> Delete Player</button>
            </div>
        </div>
    </div>
    )
}

export default singlePlayer