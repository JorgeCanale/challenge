import { createSlice } from "@reduxjs/toolkit";

 const initialState = {
    characters: undefined,
    backup: undefined,
    character: undefined,
    filteredby: undefined,

}


const charactersSlice = createSlice({
    name: "characters",
    initialState,
    reducers:{
        getCharacters: (state, action)=>{
            state.characters = action.payload
            state.backup = action.payload
        },
        getOneCharacter: (state,action)=>{
            state.character = action.payload
        },
        filteredByEyesColor: (state, action)=>{
            const filtered = state.backup.filter(character=> character.eye_color === action.payload)
            state.characters = filtered
            state.filteredby = "eye_color"
        },
        filteredByGender: (state,action)=>{
            const filtered = state.backup.filter(character=> character.gender === action.payload)
            state.characters = filtered
            state.filteredby = "gender"
        },
        mixedFilters: (state,action)=>{
            if(state.filteredby === "gender" || state.filteredby === "eye_color"){
                const filtered = state.characters.filter(character => character.eye_color === action.payload)
                state.characters = filtered
            }
        },
        clearFilters: (state, action)=>{
            state.characters = state.backup
            state.filteredby = ""
        },
        clearState: (state,action)=>{
            state.character= undefined
            state.backup = undefined
            state.filteredby= undefined
        }
    }
})

export const {getCharacters, getOneCharacter,filteredByEyesColor,filteredByGender,clearFilters, clearState} = charactersSlice.actions

export default charactersSlice.reducer