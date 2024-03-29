import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  

  const addOne = () => {
    setCount(count + 1)
    setCount( (unicorn) =>  unicorn  + 1)
  }

  return (
    <>
      <div>
        <p>Button Clicked: {count} times</p>
        <button onClick={addOne}>Click me!</button>
        <button onClick={ () => setCount(0)} >Reset</button>
    </div>
    </>
  )
}

export default App
