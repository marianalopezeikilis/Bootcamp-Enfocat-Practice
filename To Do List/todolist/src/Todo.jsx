import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Hola from './Hola.jsx';
import TareasComp from "./TareasComp.jsx";

function Todo() {

  const [tareas, setTareas] = useState([]);
  const [tarea, setTarea] = useState([]);

  const nuevaTarea = () => {

  //es mejor si pones que el viejo es [...tareas, tarea]
    let tareaNueva = [...tareas];
    tareaNueva.push(tarea);
    setTareas(tareaNueva);
    setTarea('');
  }


//ESTO SIRVE PARA CARGAR EL CONSOLE LOG RECIEN DESPUES DE QUE SE ACTUALICE LA VARIABLE Y NO ANTES! PORQUE TARDA
//EN CARGARSE
  useEffect(() => {
    console.log(tareas);
  }, [tareas])
  

  const eliminaTarea = (i) => {
    let tareasEliminadas = tareas.filter((x, a) => a!==i);
   console.log(tareas);  
  console.log(tareasEliminadas);
  setTareas(tareasEliminadas);
  }

// let listaMostrar = tareas.map((e,i)=> <button key={i} onClick={()=>eliminaTarea(i)}><TareasComp  elemento={e}  />  </button>)
  // let listaMostrar = tareas.map((e,i) => <button className='alert alert-warning' key={i}  onClick={()=>eliminaTarea(i)} >{e}</button>)
  // let listaMostrar = tareas.map((e,i)=> <button key={i} onClick={()=>eliminaTarea(i)}><TareasComp  elemento={e}  /> )
  
      return (
    <div className="p-5">
      <h1>Todo-list</h1>
      <Container>
        <Row>
          <Col>
            <label className="mt-3">Tasca </label>
            <br />
            
            <input className="form-control" type="text" value={tarea} onChange={(e) => setTarea(e.target.value)}/>
            <button className="btn btn-primary mt-2 btn-sm" onClick={nuevaTarea}> Enviar </button>



          </Col>
          <Col>
          <p>Tasques</p>
<div> {listaMostrar} </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Todo;
