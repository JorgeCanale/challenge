import axios from "axios";
import { getCharacters,getOneCharacter,filteredByEyesColor,filteredByGender,clearFilters,clearState } from "../features/characters/charactersSlice";


export const getAllCharacters = ()=>{
    return async dispatch =>{
        const data = (await axios.get("https://swapi.dev/api/people")).data
        let characters = data.results
        let next = data.next
        while(next  !== null){
            let char = (await axios.get(next)).data
            characters = characters.concat(char.results)
            console.log(char);
            next = char.next
        }
        console.log(characters)
        dispatch(getCharacters(characters))
    }
}


export const getCharacterss =(urls)=>{
    return async dispatch =>{
        const characters = []
        for (let i = 0; i < urls.length; i++) {
            let char = (await axios.get(urls[i])).data
            characters.push(char)
            
        }
        dispatch(getCharacters(characters))
    }
}

export const getCharacter = (url)=>{
    return async dispatch =>{
        const character = (await axios.get(url)).data
        dispatch(getOneCharacter(character))
    }
}

export const filterByeEyesColorr =(value)=>{
    return async dispatch=>{
        dispatch(filteredByEyesColor(value))
    }
}

export const filterByeGender =(value)=>{
    return async dispatch=>{
        dispatch(filteredByGender(value))
    }
}

export const clearTheFilters = () =>{
    return async dispatch =>{
        dispatch(clearFilters())
    }
}

export const clearStateCache = ()=>{
    return async dispatch=>{
        dispatch(clearState())
        console.log("state clear")
    }
}