import React from 'react';
/** Import de la donnée */
import './App.css';

import Robots from './data/data';
//import RobotCard from './components/RobotCard';

function App() {
  console.log(Robots)
  return (
    <div className="App">
      <h1>Robot Finder</h1>
        {Robots.map((robot) => {return (<div key={robot.id}>
          <h2>{robot.name} {robot.username}</h2>
          <p>{robot.phone}</p>
          <p>{robot.email}</p>
          <p>{robot.website}</p>
          </div>)
      
        })}
    </div>
  );
}

export default App;
