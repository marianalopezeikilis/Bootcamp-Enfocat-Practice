import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
//PIEDRA = 1
//PAPEL =2
//TIJERA=3

function App() {
const [ordenador, setOrdenador] = useState(Math.floor(Math.random()*3+1));
const [resultado, setResultado] = useState('');
const [partidos, setPartidos] = useState(0);
const [ganados, setGanados] = useState(0);
const [porcentaje, setPorcentaje] = useState('');

 const jugar= (a) => {
   console.log('ordenador' + ordenador);
   setPartidos(partidos+1);
   if (ganados!==0) {setPorcentaje('Has ganado el '+  Math.trunc(ganados/partidos*100)+ '% de los partidos.')};
   setOrdenador(Math.floor(Math.random()*3+1));


  if(a===1 && ordenador===1) {
    console.log('Has empatado');
    return setResultado('Has empatado');
  }
  if(a===1 && ordenador===2) {
    console.log('Has perdido');
    return setResultado('Has perdido');
  }
  if(a===1 && ordenador===3) {
    console.log('Has ganado');
    setGanados(ganados+1);
    {setPorcentaje('Has ganado el '+  Math.trunc((ganados+1)/(partidos+1)*100)+ '% de los partidos.')};
    return setResultado('Has ganado');
  }
  if(a===2 && ordenador===2) {
    console.log('Has empatado');
    return setResultado('Has empatado');
  }
  if(a===2 && ordenador===1) {
    console.log('Has ganado');
    setGanados(ganados+1);
    {setPorcentaje('Has ganado el '+ Math.trunc((ganados+1)/(partidos+1)*100)+ '% de los partidos.')};
    return setResultado('Has ganado');
  }
  if(a===2 && ordenador===3) {
    console.log('Has perdido');
    return setResultado('Has perdido');
  }
  if(a===3 && ordenador===3) {
    console.log('Has empatado');
    return setResultado('Has empatado');
  }
  if(a===3 && ordenador===1) {
    console.log('Has perdido');
    return setResultado('Has perdido');
  }
  if(a===3 && ordenador===2) {
    console.log('Has ganado');
    setGanados(ganados+1);
    {setPorcentaje('Has ganado el '+  Math.trunc((ganados+1)/(partidos+1)*100)+ '% de los partidos.')};
    return setResultado('Has ganado');
  }
  
 }


  return (
 <div className='contenedor m-5'>
 <div className='imagenes'> 
<img className='btn' onClick={()=>jugar(1)} src='../img/piedra.jpeg'></img> 
<img className='btn' onClick={()=>jugar(2)} src='../img/papel.png'></img> 
<img className='btn' onClick={()=>jugar(3)} src='../img/tijera.jpeg'></img> 
</div>
<div className='m-3'> {resultado}</div>
<div> Se han jugado {partidos} partidos.</div>
<div> {porcentaje}</div>
 </div>
  )
}

export default App
