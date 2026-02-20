import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { plus, minus, multiply, divide } from "./Features/clac/calcSlice";
import { plus1, minus1, multiply1, divide1 } from "./Features/clac/calcSlice2";
import './App.css'

function App() {

  const dispatch = useDispatch();
  const count = useSelector((state) => state.calculator.value);
  const count2 = useSelector((state) => state.calculator2.value);

  const count1 = useSelector((state) => state);
  console.log(count1)

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
  <button onClick={() => dispatch(plus1({number1: Number(number1), number2: Number(number2)}))}>plus</button>
  <button onClick={() => dispatch(minus1({number1: Number(number1), number2: Number(number2)}))}>minus</button>
  <button onClick={() => dispatch(multiply1({number1: Number(number1), number2: Number(number2)}))}>multiply</button>
  <button onClick={() => dispatch(divide1({number1: Number(number1), number2: Number(number2)}))}>divide</button>

  
  <h1>{count2}</h1>
  </div>
    </>
  )
}

export default App
