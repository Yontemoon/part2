import { Courses } from "./Courses"

export const Header = ({ course }) => {
  return (
    <h1>{course}</h1>
  )
}

export const Total = ({ parts }) => {
  const sum = parts.reduce((sum, part) =>{
    return sum + part.exercises
  }, 0)
  return (
    <h3>Total number of exercises: {sum}</h3 >
  )
}

const Part = ({ part }) => 
  <p>
    {part.name}: {part.exercises}
  </p>

export const Content = ({ parts }) => 
  <>
    {parts.map(part =>
      <Part key={part.id} part={part}/>
    )}
  </>

const App = () => {
  const courses = [
    {
      id: 1,
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
    id: 2,
    name: 'Node.js',
    parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }  
  ]
  return <Courses courses = {courses} />
}

export default App