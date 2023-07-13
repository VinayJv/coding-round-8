import { useNavigate } from "react-router";

export function Card({ data }){
    const navigate = useNavigate();
    const date = new Date(data.eventStartTime);
    return(
    <div className="card" onClick={()=>navigate(`/${data.title}`)}>
        <div className="callouts">{data.eventType} Event</div>
        <img src={data.eventThumbnail} alt=""></img>
        <div>
            <span className="time">{date.toDateString()}</span>
            <span className="time"> - </span>
            <span className="time">{date.toLocaleTimeString()} IST</span>
        </div>
        <h4>{data.title}</h4>
    </div>);
}