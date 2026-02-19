import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(null)
  const [number1, setNumber1] = useState(null)
  const [number2, setNumber2] = useState(null)

  function handleNumber1Change(e) {
    setNumber1(e.target.value)
  }

  function handleNumber2Change(e) {
    setNumber2(e.target.value)
  }

  const sx = {
    display: 'flex',
    flexDirection: 'column',
    width: '200px',
  }



  return (
    <>
  <div style={sx}>
  <label htmlFor="number">Number 1:</label>
  <input onChange={handleNumber1Change} type="number" name="number1" id="number" placeholder="Enter number 1" />
  <br />
  <label htmlFor="number2">Number 2:</label>
  <input onChange={handleNumber2Change} type="number" name="number2" id="number2" placeholder="Enter number 2" />
  <br />
  <button onClick={() => setCount(Number(number1) + Number(number2))}>plus</button>
  <button onClick={() => setCount(Number(number1) - Number(number2))}>minus</button>
  <button onClick={() => setCount(Number(number1) * Number(number2))}>multiply</button>
  <button onClick={() => setCount(Number(number1) / Number(number2))}>divide</button>

  <h1>{count}</h1>
  </div>
    </>
  )
}

export default App
