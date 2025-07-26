import Content from './comp/Content'
import Header from './comp/Header'
import Total from './comp/Total'
import './app.css'

const App = ()=>{

  const course = 'Half Stack Application Development'
  const parts = [
      {
        name:'Fundamentals of react',
        exe: 10 
      },
      { 
        name: 'Using props to pass data',
        exe: 7 
      },
      {
        name:'State of a component ',
        exe: 14
      }
  ]

  

  return (
    <div className='courseinfo'>
      <Header title={course}/>
      <Content content={parts}/>
      <Total total = {parts}/>
    </div>
  )
}

export default App
