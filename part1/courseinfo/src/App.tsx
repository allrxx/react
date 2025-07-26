import './App.css'

const App = ()=>{

  const course = 'Half Stack Application Development'
  const part1 = 'Fundamentals of react'
  const exe1 = 10
  const part2 = 'Using props to pass data'
  const exe2 = 7
  const part3 = 'State of a component '
  const exe3 = 14

  return (
    <>
      <h1>{course}</h1>
      <p>
        {part1} {exe1}
      </p>
      <p>
        {part2} {exe2}
      </p>
      <p>
        {part3} {exe3}
      </p>
      <p>Number of excercies {exe1+exe2+exe3}</p>
    </>
  )
}

export default App
