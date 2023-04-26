import React from "react";
import { useSelector } from "react-redux";
import { CharacterCard } from "../card/characterCard";
import"./cards.css"

export const CharactersCards =()=>{

    const characters = useSelector( state => state.characters.characters)

    return(
        <div className="cards">
            {characters && characters.map((character, index) =>{
            return(
                <CharacterCard key={index} name={character.name} eyesColor={character.eye_color} gender={character.gender} />
            )
        })}
        </div>
    )
}