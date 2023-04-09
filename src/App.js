import React from 'react';
/** Import de la donnée */
import './App.css';

import Robots from './data/data';
import RobotCard from './components/RobotCard';

function App() {
  console.log(Robots)
  return (
    <div className="app">

      <h1>Robot Finder</h1>
    

    <div className="robotContainer">
    {Robots.map((robot) => <RobotCard key={robot.id} robot={robot}/>)}
    </div>
    </div>
  );
}

export default App;
