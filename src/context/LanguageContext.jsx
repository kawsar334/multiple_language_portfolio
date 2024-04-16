import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'
import { ButtonText } from '../data/data'
import { eng } from '../data/English'
import { ar } from '../data/arabic'
import { bn } from '../data/bn'
import { ur } from '../data/urdu'
import { hin } from '../data/hindi'



const initialState = {
    language:'العربي',
}
const reducer = (state,action)=>{
    switch(action.type){
        case ButtonText[0].name :
            return { ...state, language:action.payload }
        case ButtonText[1].name:
            return { ...state, language: action.payload }
        case ButtonText[2].name:
            return { ...state, language: action.payload }
        case ButtonText[3].name:
            return { ...state, language: action.payload }
        case ButtonText[4].name:
            return { ...state, language: action.payload }

            default:
                return state; 
    }
}

export const LangContext = createContext();
const LanguageContext = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [lang, setLang] = useState('eng');
    useEffect(()=>{
        if (state.language ==='eng'){
            setLang(eng)
        } else if (state.language === "العربي"){
            setLang(ar)

        } else if (state.language === "bang") {
            setLang(bn)

        } else if (state.language === "urdu") {
            setLang(ur)
           
        } else if (state.language === "hindi") {
            setLang(hin) 
        }
    },[state]);
 

  return (
    <LangContext.Provider value={{ language:state.language,lang, setLang, dispatch }}>
    { children }
    </LangContext.Provider>
  )
}

export default LanguageContext