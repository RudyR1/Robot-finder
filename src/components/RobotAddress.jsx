import React, { useState } from "react";

const RobotAddress = ({address}) => {
const [activ, setActive] = useState(false);

    return <div>

        <div>
      <button className={activ ? 'btn btn-red ' : 'btn btn-green'} onClick={() => setActive(!activ)}>Voir</button>
    </div>
    <div>
      {activ ? <div>
        <h5 className="text-center">Mon adresse:</h5>
        <p className="text-center">{address.suite}</p>
        <p className="text-center">{address.street}</p>
        <p className="text-center">{address.zipcode} - {address.city}</p></div> : ''
      }
    </div>
  </div>


}  






export default RobotAddress;