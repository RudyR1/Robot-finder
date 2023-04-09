const RobotCard = ({robot}) => {
return (
<div className="robotCard">
          <h2>{robot.name} {robot.username}</h2>
          <p>Phone: {robot.phone}</p>
          <p>Email: {robot.email}</p>
          <p>Website: {robot.website}</p>
</div>
)  
    
    }




export default RobotCard;
