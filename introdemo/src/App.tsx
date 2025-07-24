// import { useState } from 'react'
import './App.css'

const Hello =(props) => {
  console.log(props)
  return (
    <div>
      <h1>Hello, {props.name} from {props.place}</h1>
    </div>
  )
}

function App() {
  const now = new Date()
  const a =20
  const b= 30
  const c = a+b
  return (
    <>
      <Hello name='alex' place='mala'/>
      <Hello name = 'sharon' place='chalakudy'/>
      <h3>Hello World, today is {now.toString()}</h3>
      <h1>{a} plus {b} is {c}</h1>
    </>
  )
}

export default App
