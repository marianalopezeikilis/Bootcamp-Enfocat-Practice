import {useState, useEffect} from 'react';

import React from 'react'
const API = "http://localhost:5001/api/citasrandom";
const IMG_AUTOR = "http://localhost:5001/citasrandom/img/";


function TaulaCitas() {


  const [llista, setLlista] = useState([]);

  useEffect(()=>{

      fetch(API+"citarandom/")
      .then(resp => resp.json())
      .then(resp => setLlista(resp))
      .catch(error => console.log(error))

  }, [])

let files = <h3>Cargando...</h3>;

if (llista.length > 0){
  files = llista.map((e,i) => <tr key={i}> <td>{e.nombre}</td> <td>{e.img}</td> </tr>)
}

  return (    
     <>
    <img src={IMG_AUTOR} />
    
    <table>
        <tbody>

        {files}
        </tbody>
    </table>
    </>
  )
}

export default TaulaCitas;