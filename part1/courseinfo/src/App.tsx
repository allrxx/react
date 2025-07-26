import Content from './comp/Content'
import Header from './comp/Header'
import Total from './comp/Total'

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
      <Header title={course}/>
      <ol>
        <li>
          <Content content={part1} exe={exe1}/>
        </li>
        <li>
          <Content content={part2} exe={exe2}/>
        </li>
        <li>
          <Content content={part3} exe={exe3}/>
        </li>
      </ol>
      <Total total = {exe1+exe2+exe3}/>
    </>
  )
}

export default App
