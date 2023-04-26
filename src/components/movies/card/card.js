import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {getCharacterss} from "../../../actions/charactersActions"
import { useSelector } from "react-redux";
import "./card.css"
export const MovieCard =({name, episode, director, characters})=>{
    const character = useSelector((state) => state.characters.characters)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleClick = () =>{
        dispatch(getCharacterss(characters))
        navigate("/characters")
    }
    console.log(character);
    return(
        
    <div className="card">
        <h3 className="tittle">{name}</h3>
        <div className="episode">{`Episodio ${episode}`}</div>
        <div className="director">{`Director: ${director}`}</div>
        <button className="char" onClick={handleClick} >characters</button>
    </div>
    )
}