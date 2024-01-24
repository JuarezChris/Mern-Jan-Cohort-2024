import {React, useState} from 'react'

const Form = (props) => {
  const {words, setWords} = props
  // We had  {} over our useState
  const [word, setWord] = useState("")
  // console.log(word)
  const submitHandler = (e) => {
    e.preventDefault()
  }
  

  return (
    <div>
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="">Palidrome Word:</label>
          </div>
          <div>
            <input type="text" value={word} onChange={(e) => setWord(e.target.value)}/>
          </div>
          <button>Submit</button>
        </form>
    </div>
  )
}

export default Form