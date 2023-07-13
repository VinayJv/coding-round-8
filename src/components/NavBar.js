import { useDataContext } from "../context/DataContext";


export function NavBar(){
const { setSearch } = useDataContext();

    const inputHandler = (e) => {
        setSearch(e.target.value);
    }

    return(
    <div className="NavBar">
        <div><h2>MeetUp</h2></div>
        <div><input type="search" onChange={inputHandler} placeholder="Search by title"></input></div>
    </div>);
}