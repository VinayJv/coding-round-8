import { useDataContext } from "../context/DataContext";
import { Card } from "../components/Card";

export function Home(){
    const { data, filter, setFilter, search } = useDataContext();

    const changeFilter = (event) => {
        setFilter(event.target.value);
    }

    const filteredData = () => {
        let temp = [];
        if(search.length === 0){
            temp = data;
        }
        else {
            temp = data.filter((meetup)=>meetup.title.toLowerCase().includes(search));
        }
        return filter.length === 0 ? temp : temp.filter((meetup)=>meetup.eventType === filter);    
    }

    return (
    <div>
        <div className="header">
            <h1>Meetup Events</h1>
            <select onChange={changeFilter}>
                <option defaultChecked value=""> Select Event Type</option>
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
            </select>
        </div>
        <div className="main-container">
            {filteredData().map((meetup,index)=><Card data={meetup} key={index}/>)}
        </div>
    </div>);
}