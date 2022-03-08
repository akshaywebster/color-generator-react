import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    try {
      let colors = new Values(color).all(10)
      setList(colors)
      console.log(list)
    } catch (error) {
      console.log(error)
      setTimeout(() => {
        setError(false)
      }, 3000)
      setError(true)
    }
  }

  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
            className={`${error ? 'error' : null}`}
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </section>

      <section className="colors">
        <h4>list goes here</h4>
      </section>
    </>
  )
}

export default App