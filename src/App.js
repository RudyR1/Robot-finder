import React, { useState } from 'react';
/** Import de la donnée */
import './App.css';

import Robots from './data/data';
import RobotCard from './components/RobotCard';
import Search from './components/Search';

function App() {
  //console.log(Robots)
  const [search, setSearch] = useState('')
  return (
    <div className="app">

      <h1>Robot Finder</h1>
      <div class="searchContainer card">
        
      <Search search={search} handleSearchUpdate={setSearch} />
      </div>
      
        <div className="robotContainer">
          {Robots
          .filter(robot => robot.name.toLowerCase().includes(search))
          .map((robot) => <RobotCard key={robot.id} robot={robot}/>)}
        </div>
    </div>
  );
}

export default App;
