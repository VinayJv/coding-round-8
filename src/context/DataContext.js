import { createContext, useContext, useState } from "react";

const dataContext = createContext(null);

export function DataWrapper({children}){
    const [data,setData] = useState([]);

    return(<dataContext.Provider value={{data, setData}}>{children}</dataContext.Provider>);
}

export const useDataContext = () => useContext(dataContext);