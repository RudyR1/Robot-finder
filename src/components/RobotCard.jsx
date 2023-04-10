import React from "react";
import RobotAddress from "./RobotAddress";

const RobotCard = ({robot}) => {
return (

<div className="card">
          <h2>{robot.name} {robot.username}</h2>
          <p>Phone: {robot.phone}</p>
          <p>Email: {robot.email}</p>
          <p>Website: {robot.website}</p>
          <RobotAddress address={robot.address}/>
          <img className="img-robot" src={`https://robohash.org/${robot.id}?set=set2 `} alt="Robot"/>
</div>
)  
    
    }




export default RobotCard;
