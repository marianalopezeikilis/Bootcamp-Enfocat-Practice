import { useState } from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import Circulo from "./Circulo.jsx";

function App() {
  console.log("hola");
  const [arrayBolas, setArrayBolas] = useState([' ',' ',' ']);

  const calcula = () => {
    setArrayBolas([
      Math.floor(Math.random() * 50),
      Math.floor(Math.random() * 50),
      Math.floor(Math.random() * 50),
    ]);
    console.log(arrayBolas);
  };

  return (
    <div  className="App">
     
     <div style={{display:'flex'}}> 
      <Circulo texto={arrayBolas[0]} />
      <Circulo texto={arrayBolas[1]} />
      <Circulo texto={arrayBolas[2]} />
      </div>
      <Button style={{margin:'10px'}} onClick={calcula}>Calcula</Button> 
    </div>
  );
}

export default App;
