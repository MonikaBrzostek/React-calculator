import React from 'react'
import './App.css'
import Result from './Result'
import Keypad from './Keypad'
import mathloop from './video/mathloop.mp4'

function App() {
  return (
    <div>
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          width: '100%',
          left: '50%',
          top: '50%',
          height: '100%',
          objectFit: 'cover',
          transform: 'translate(-50%, -50%)',
          zIndex: '-1',
        }}
      >
        <source src={mathloop} type="video/mp4" />
      </video>
      <Result />
      <Keypad />
    </div>
  )
}

export default App
