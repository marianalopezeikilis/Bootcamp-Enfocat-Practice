import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css';
import TaulaCitas from './TaulaCitas';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <h1> Citas </h1>
    <br/>
    <TaulaCitas />
    </div>
  )
}

export default App
