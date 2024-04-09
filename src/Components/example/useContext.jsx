import { createContext,useState } from "react";

export const DadaContext=createContext();

const DadaProvider=({children})=>{
    const [paisa,setPaisa]=useState(1000)
    return <DadaContext.Provider value={{paisa,setPaisa}}>
        {children}
    </DadaContext.Provider>
}

export default DadaProvider
