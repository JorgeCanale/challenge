import React from "react";
import"./characterCard.css"

export const CharacterCard =({name, eyesColor,gender, index})=>{
    return (
        <div className="characterCard" key={index}>
            <div className="name">name: {name}</div>
            <div className="eyes">eyes color: {eyesColor}</div>
            <div className="gender"> gender: {gender}</div>
        </div>
    )
}