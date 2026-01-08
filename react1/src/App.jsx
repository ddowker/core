import { useState } from 'react'

function App() {
  var [name, setName] = useState('')

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>React Text Input Demo</h1>
      <div>
        <label htmlFor="nameInput">Enter your name: </label>
        <input
          id="nameInput"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Type your name here"
          style={{ padding: '5px', fontSize: '16px' }}
        />
      </div>
      {name && (
        <div style={{ marginTop: '20px', fontSize: '18px' }}>
          <p>Hello, <strong>{name}</strong>!</p>
        </div>
      )}
    </div>
  )
}

export default App
