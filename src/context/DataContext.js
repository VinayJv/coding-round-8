import { createContext, useContext, useState } from "react";
import { meetUpData } from "../db/MeetUp";

const dataContext = createContext(null);

export function DataWrapper({children}){
    const [data,setData] = useState(meetUpData.meetups);
    const [filter,setFilter] = useState("");
    const [search,setSearch] = useState("");

    return(<dataContext.Provider value={{data, setData, filter, setFilter, search, setSearch}}>{children}</dataContext.Provider>);
}

export const useDataContext = () => useContext(dataContext);