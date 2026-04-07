import { createContext, useReducer } from "react"

export const ValueContext=createContext();

const intialState={
    
}

const valueReducer=(state,action)=>{
    switch(action.type){

    }
}

export const ValueProvider=({children})=>{

    const [state,dispath]=useReducer(valueReducer,intialState);

}