import { useNavigate } from "react-router";

export function Card({ data }){
    const navigate = useNavigate();
    return(
    <div className="card" onClick={()=>navigate(`/${data.title}`)}>
        <img src={data.eventThumbnail} alt=""></img>
        <div>
            <span className="time">{data.eventStartTime}</span>
            <span className="time"> - </span>
            <span className="time">{data.eventEndTime}</span>
        </div>
        <h4>{data.title}</h4>
        
    </div>);
}