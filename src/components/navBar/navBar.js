import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllCharacters,clearStateCache } from "../../actions/charactersActions";
import { getMovies } from "../../actions/moviesActions";
import "./navBar.css"

export const NavBar =()=>{

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleclick =(value)=>{
        if(value === "movies"){
            dispatch(clearStateCache())
            dispatch(getMovies())
            navigate("/")
        }
        if(value === "characters"){
            dispatch(clearStateCache())
            dispatch(getAllCharacters())
            navigate("/characters")
        }
    }


    return(
        <div className="navbar">
            <button className="mButton" onClick={(e)=>handleclick(e.target.value)} value={"movies"}>Movies</button>
            <button className="cButton" onClick={(e)=>handleclick(e.target.value)} value={"characters"}>Characters</button>
        </div>
    )
}