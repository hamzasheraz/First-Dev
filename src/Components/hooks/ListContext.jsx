import React, { createContext } from 'react'
import useList from './useList';

export const ListContext=createContext();

export default function ListProvider({children}) {
    const{list,addLists,changeHandler,newList}=useList();
  return (
    <ListContext.Provider value={{list,addLists,changeHandler,newList}}>
        {children}
    </ListContext.Provider>
  )
}
