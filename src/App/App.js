import React from 'react'
import './App.css'
import Result from '../Result/Result'
import Keypad from '../Keypad/Keypad'
import mathloop from './video/mathloop.mp4'

// dzielenie przez 0
//

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      result: '',
    }
  }

  // warning about eval
  // jak inaczej rozwiazac zerowanie wyniku
  handleClick = (e) => {
    if (e.target.name !== '=' && e.target.name !== 'C') {
      let result = this.state.result + e.target.name
      this.setState({ result })
    } else if (e.target.name === '=') {
      let result = eval(this.state.result)
      this.setState({ result })
    } else if (e.target.name === 'C') {
      this.setState({ result: '' })
    }
  }

  render() {
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
            height: '1000',
            objectFit: 'cover',
            transform: 'translate(-50%, -50%)',
            zIndex: '-1',
          }}
        >
          <source src={mathloop} type="video/mp4" />
        </video>
        <div className="calculator">
          <Result result={this.state.result} />
          <Keypad handleClick={this.handleClick} />
        </div>
      </div>
    )
  }
}

export default App
