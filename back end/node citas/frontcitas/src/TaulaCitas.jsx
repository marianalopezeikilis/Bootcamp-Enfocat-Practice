import {useState, useEffect} from 'react';

import React from 'react'
const API = "http://localhost:5001/api/";
const IMG_AUTOR = "http://localhost:5001/img/";


function TaulaCitas() {

//ESTA LISTA LA PRIMERA VEZ QUE SE EJECUTE DARÁ  NULL, HAY QUE TENERLO EN CUENTA A LA HORA DE RENDERIZAR
  const [citaMostrada, setCitaMostrada] = useState();

  //FETCH, LO QUE LLEGUE SE CONVIERTE EN JSON
  useEffect(()=>{

      fetch(API+"citasrandom/")
      .then(resp => resp.json())
      .then(resp => setCitaMostrada(resp))
      .catch(error => console.log(error))

  }, [])

let files = <h3>Cargando...</h3>;

if (citaMostrada!==undefined){
  console.log(citaMostrada);

  files = <div> {citaMostrada.nombre} {citaMostrada.texto}  <img src={IMG_AUTOR+citaMostrada.img}/> </div>; 
  }


  return (    
     <> 
   
        {files} 
    
    </>
  )
}

//RECOMENDABLE PONER UN CONDICIONAL YA SEA EL DE FILES O DIRECTAMENTE EN RETURN


export default TaulaCitas;