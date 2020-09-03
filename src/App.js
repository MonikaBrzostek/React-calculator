import React from 'react'
import './App.css'
import Result from './Result'
import Keypad from './Keypad'
import mathloop from './video/mathloop.mp4'

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
    if (e !== '=' && e !== 'C') {
      let result = this.state.result.concat(e)
      this.setState({ result })
    } else if (e === '=') {
      let result = eval(this.state.result)
      this.setState({ result })
      setTimeout(() => {
        this.setState({ result: '' })
      }, 2000)
    } else if (e === 'C') {
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
        <Result result={this.state.result} />
        <Keypad handleClick={this.handleClick} />
      </div>
    )
  }
}

export default App
