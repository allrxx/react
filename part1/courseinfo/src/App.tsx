import Content from './comp/Content'
import Header from './comp/Header'
import Total from './comp/Total'

const App = ()=>{

  const course = 'Half Stack Application Development'
  const part1 = {
    name:'Fundamentals of react',
    exe1: 10 
  }

  const part2 = { 
    name: 'Using props to pass data',
    exe2: 7 
  } 

  const part3 = {
    name:'State of a component ',
    exe3: 14
  }
 

  return (
    <>
      <Header title={course}/>
      <ol>
        <li>
          <Content content={part1.name} exe={part1.exe1}/>
        </li>
        <li>
          <Content content={part2.name} exe={part2.exe2}/>
        </li>
        <li>
          <Content content={part3.name} exe={part3.exe3}/>
        </li>
      </ol>
      <Total total = {part1.exe1 + part2.exe2 + part3.exe3}/>
    </>
  )
}

export default App
