import React from 'react'

function Hola(work, texto) {
  return (
    //NO OLVIDAR PASAR PARAMETROS
    <div  onClick={()=>work(texto)}> {texto} </div>
  )
}

export default Hola

