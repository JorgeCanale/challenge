import React,{useState} from "react";
import { useSelector } from "react-redux";
import { CharacterCard } from "../card/characterCard";
import { Pagination } from "../../pagination/pagination";
import"./cards.css"

export const CharactersCards =()=>{

    const characters = useSelector( state => state.characters.characters)
    const [page,setPage] = useState(1)
    const [charactersPerPage ,setCharactersPerPage] = useState(23)
    const max = Math.ceil(characters.length / charactersPerPage)

    return(
        <div className="container">
            <div className="cards">
             {characters && characters.slice((page-1) * charactersPerPage ,(page-1) * charactersPerPage + charactersPerPage).map((character, index) =>{
             return(
                 <CharacterCard key={index} name={character.name} eyesColor={character.eye_color} gender={character.gender} />
             )
             })}
            </div>

            < Pagination  className="Pagination" page={page} setPage={setPage} max={max}/>
        </div>
    )
}