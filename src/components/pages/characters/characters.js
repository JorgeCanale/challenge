import React from "react";
import { useSelector } from "react-redux";
import { CharactersCards } from "../../characters/cards/characterCards";
import { useDispatch } from "react-redux";
import {  getAllCharacters } from "../../../actions/charactersActions";
import { Filters } from "../../filter/filter";
import "./characters.css"


export const CharactersPage = ()=>{

    
    const char = useSelector((state)=> state.characters.characters)




    return (
        <div className="characters">
            <Filters />
            <div>
                { char !== undefined ? <CharactersCards/> : <h1 className="loading">...Loading</h1>}
            </div>
        </div>
    )
}