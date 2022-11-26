import { useState } from 'react'
import data from './data/data';
import List from './List/List'
import './App.css'

function App() {
  const [people, setPeople] = useState(data)
  console.log(people.length)
  return (
    <main>
      <section className='container'>
        <h3> {people.length} birthdays today.</h3>
        <List people={people}/>
        <button onClick={()=> setPeople([])}>Clear All</button>
      </section>
    </main>
  )
}

export default App
