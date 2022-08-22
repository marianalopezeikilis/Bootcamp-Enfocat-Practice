import React, { useState } from 'react'
import '../App.css'
import styled from 'styled-components'
import '../../public/img/1.png'

function Memory() {
const [visibilidad, setVisibilidad] = useState('visible');
const [arrayCuadrados, setArrayCuadrados] = useState(['../../public/img/1.png','../../public/img/2.png','../../public/img/3.png','../../public/img/4.png','../../public/img/5.png','../../public/img/6.png','../../public/img/7.png','../../public/img/8.png','../../public/img/9.png','../../public/img/10.png']);
const [tapado, setTapado] = useState(0);
// const play = () => {

//   console.log('hola');
//  }

const Boton = styled.div`
visibility: ${visibilidad};
`
let cuadrados = arrayCuadrados.map((e,i)=> <div key={i} className='divimg'><img src={e}></img></div>)



  return (
    <div>

<div className='c'> {cuadrados}</div>

{/* Memory
<div className='c'>
<Boton className='divimg' onClick={()=> setVisibilidad('hidden')}></Boton>
<Boton className='divimg' onClick={play} ></Boton>
<Boton className='divimg' onClick={play} ></Boton>
<Boton className='divimg' onClick={play} ></Boton>
<Boton className='divimg' onClick={play} ></Boton>
</div>
<div className='c'>
<Boton className='divimg' onClick={play} ></Boton>
<Boton className='divimg' onClick={play} ></Boton>
<Boton className='divimg' onClick={play} ></Boton>
<Boton className='divimg' onClick={play} ></Boton>
<Boton className='divimg' onClick={play} ></Boton>
</div>
<div className='c'>
<Boton className='divimg' onClick={play} ></Boton>
<Boton className='divimg' onClick={play} ></Boton>
<Boton className='divimg' onClick={play} ></Boton>
<Boton className='divimg' onClick={play} ></Boton>
<Boton className='divimg' onClick={play} ></Boton>
</div>
<div className='c'>
<Boton className='divimg' onClick={play} ></Boton>
<Boton className='divimg' onClick={play} ></Boton>
<Boton className='divimg' onClick={play} ></Boton>
<Boton className='divimg' onClick={play} ></Boton>
<Boton className='divimg' onClick={play} ></Boton>
</div> */}


    </div>
  )
}

export default Memory