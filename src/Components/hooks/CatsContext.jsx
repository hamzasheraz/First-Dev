import React, { createContext } from 'react'
import useCats from './useCats';

export const  CatsContext=createContext();

const CatsProvider = ({children}) => {
    const {cats,addCats,changeHandler,newCats}=useCats();
  return (
    <CatsContext.Provider value={{cats,addCats,changeHandler,newCats}}>
        {children}
    </CatsContext.Provider>
  )
}

export default CatsProvider