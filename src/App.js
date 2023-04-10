import React, { useState } from 'react';
/** Import de la donnée */
import './App.css';

import Robots from './data/data';
import RobotCard from './components/RobotCard';

function App() {
  //console.log(Robots)
  const [search, setSearch] = useState('')
  return (
    <div className="app">

      <h1>Robot Finder</h1>
      <div class="searchContainer card">
        <label>
          <p>Rechercher votre Robot</p>
      <input type="text" value={search} onChange={(event) => setSearch(event.target.value)}/>
      </label>
      </div>
      
        <div className="robotContainer">
          {Robots.map((robot) => <RobotCard key={robot.id} robot={robot}/>)}
        </div>
    </div>
  );
}

export default App;
