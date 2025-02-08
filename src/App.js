
import './App.css';
import InputName from './InputName'
import HPD from './HappyProposeDay';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';



function App() {
  const[crushName, setCrushName]= useState(null)

  const handleSetName = (name) => {
    setCrushName(name);
  };

 
  return (
    <div style={{ backgroundColor:crushName?'pink':'white', height: '100vh', width: '100vw' }}>

    <div className="App" >       
        {crushName?<HPD crushName={crushName} />:<InputName setName={handleSetName} />}
    </div>
    </div>
  );
}

export default App;
