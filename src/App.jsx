 
import './App.css';
import { useState } from 'react';

function App() {
  const [open,setOpen]= useState(false)
  const handlerRef = ()=>{
    setOpen(!open)
  }
  return (
   
    <div className="App">
      <div className="container">


    <div className= {open ? 'open': 'close'}>
      <h2>modal</h2>
    </div>
    <button onClick={handlerRef}>click</button>

      </div>




    </div>

 




  );
}

export default App;
