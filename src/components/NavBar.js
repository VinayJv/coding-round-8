import { useDataContext } from "../context/DataContext";
import { useNavigate } from "react-router";


export function NavBar(){
const { setSearch } = useDataContext();
const navigate = useNavigate();

    const inputHandler = (e) => {
        setSearch(e.target.value);
    }

    return(
    <div className="NavBar">
        <div onClick={()=>navigate("/")} style={{cursor: "pointer"}}><h2>MeetUp</h2></div>
        <div><input type="search" className="navinput" onChange={inputHandler} placeholder="Search by title or tag"></input></div>
    </div>);
}