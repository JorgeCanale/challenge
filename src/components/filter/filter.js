import React from "react";
import { useDispatch } from "react-redux";
import { filterByeEyesColorr,filterByeGender, clearTheFilters } from "../../actions/charactersActions";
import "./filter.css"

export const Filters =()=>{  
    
    const dispatch = useDispatch()
    const genderFilterHandler = (value) =>{
        
        if(value ==="female"){
            dispatch(filterByeGender(value))
        }
        if(value === "male"){
            dispatch(filterByeGender(value))
        }
        if(value === "n/a" ){
            dispatch(filterByeGender(value))
        }
    }

    const eyeColorFilterHandler = (value)=>{

        if( value === "brown"){
            dispatch(filterByeEyesColorr(value))
        }
        if( value === "blue"){
            dispatch(filterByeEyesColorr(value))
        }
        if( value === "green"){
            dispatch(filterByeEyesColorr(value))
        }
        if( value === "yellow"){
            dispatch(filterByeEyesColorr(value))
        }
        if( value === "white"){
            dispatch(filterByeEyesColorr(value))
        }

    }

    const ClearFiltered=()=>{
        dispatch(clearTheFilters())
    }



    return(
        <div className="filters">
            <select className="eyesFilter" onChange={(e)=>eyeColorFilterHandler(e.target.value)}>
                {
                    ["eye color","brown","blue","green","yellow","white","black"].map((i,index)=>{
                        return <option key={index} value={i}>{i}</option>
                    })
                }
            </select >
            <select className="genderFilter" onChange={(e)=>genderFilterHandler(e.target.value)}>
                {
                    ["gender","male","female", "hermaphrodite","n/a"].map((i,index)=>{
                        return <option  key={index} value={i}>{i}</option>
                    })
                }
            </select>
            <button className="clear" onClick={ClearFiltered}>Clear</button>
        </div>
    )
}