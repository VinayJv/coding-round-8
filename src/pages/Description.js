import { useParams } from "react-router";
import { useDataContext } from "../context/DataContext";
import { useState } from "react";
import { BiTime } from "react-icons/bi";
import { BiCurrentLocation } from "react-icons/bi";
import { PiCurrencyInrBold } from "react-icons/pi";

export function Description(){
    const [showForm, setShowForm] = useState(false);
    const { data } = useDataContext();
    const { title } = useParams();
    const clickedEvent = data.find((meetup)=>meetup.title === title);
    const [toggle,setToggle] = useState(clickedEvent.isPaid);
    const startDate = new Date(clickedEvent.eventStartTime);
    const endDate = new Date(clickedEvent.eventEndTime);

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
            <img src={clickedEvent.eventThumbnail} alt=""></img>
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
            <div className="container">
            <div className="date-container">
                <div><BiTime /></div>
                <div>
                    <p>{startDate.toDateString()} at {startDate.toLocaleTimeString()} to</p>
                    <p>{endDate.toDateString()} at {endDate.toLocaleTimeString()}</p>
                </div>             
            </div>
            <div className="date-container">
                <div><BiCurrentLocation /></div>
                <div>
                    <p>{clickedEvent.location}</p>
                    <p>{clickedEvent.address}</p>
                </div>             
            </div>
            <div className="date-container">
                <div><PiCurrencyInrBold /></div>
                <div>{clickedEvent.price}</div>             
            </div>
            </div>
            <h3>SPEAKERS: ({clickedEvent.speakers.length})</h3>
            <div className="speaker-container">
                {clickedEvent.speakers.map((speaker,index)=><div className="speaker-card" key={index}>
                    <img src={speaker.image} alt="" className="speaker-img"></img>
                    <b>{speaker.name}</b>
                    <p>{speaker.designation}</p>
                </div>)}
            </div>
            <button className="RSVP-btn" onClick={()=>setShowForm(!showForm)}>{toggle ? "Already RSVPed" : "RSVP"}</button>
        </div>
    </div>);
}