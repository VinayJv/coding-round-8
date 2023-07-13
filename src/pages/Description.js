import { useParams } from "react-router";
import { useDataContext } from "../context/DataContext";
import { useState } from "react";

export function Description(){
    const [showForm, setShowForm] = useState(false);
    const { data } = useDataContext();
    const { title } = useParams();
    const clickedEvent = data.find((meetup)=>meetup.title === title);
    const [toggle,setToggle] = useState(clickedEvent.isPaid);

    return(
    <div className="description">
        <div style={{ display: showForm ? "flex" : "none" }} className="form-container">
            <div className="form">
                <h3>Complehte your RSVP</h3>
                <p className="time">Fill in your personal information</p>
                <div>
                    <label>Name:<br /><input type="text" className="forminput"></input></label><br />
                    <label>Email:<br /><input type="text" className="forminput"></input></label>
                </div>
                <button onClick={()=>{
                    setToggle(!toggle);
                    setShowForm(false);
                }}>RSVP</button>
                <button onClick={()=>setShowForm(false)}>Close</button>
            </div>
        </div>
        <div className="left">
            <h1>{clickedEvent.title}</h1>
            <p>Hosted By:</p>
            <h5>{clickedEvent.hostedBy}</h5>
            <img src={clickedEvent.eventThumbnail}></img>
            <h3>Details: </h3>
            <p>{clickedEvent.eventDescription}</p>
            <h3>Additional Information: </h3>
            <p><span className="bold">Dress Code:</span> {clickedEvent.additionalInformation.dressCode}</p>
            <p><span className="bold">Age Restrictions:</span> {clickedEvent.additionalInformation.ageRestrictions}</p>
            <h3>Event Tags:</h3>
            <div>
                {clickedEvent.eventTags.map((tag,index)=><button key={index}>{tag}</button>)}
            </div>
        </div>
        <div className="right">
            <button onClick={()=>setShowForm(!showForm)}>{toggle ? "Already RSVPed" : "RSVP"}</button>
        </div>
    </div>);
}