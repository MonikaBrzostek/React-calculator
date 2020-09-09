import React from 'react'
import './App.css'
import Result from '../Result/Result'
import Keypad from '../Keypad/Keypad'
import mathloop from './video/mathloop.mp4'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      result: '',
    }
  }

  handleClick = (e) => {
    if (e.target.name !== '=' && e.target.name !== 'C') {
      let result = this.state.result + e.target.name
      this.setState({ result })
    } else if (
      //checker for deviding by zero
      e.target.name === '=' &&
      this.state.result.includes('/0') === true
    ) {
      alert("You can't divide by 0!!!")
      this.setState({ result: '' })
    } else if (e.target.name === '=') {
      //result count + rounding to 5 decimals
      let result = eval(this.state.result).toFixed(5)
      console.log(result)
      if (result.includes('.00000')) {
        result = Math.round(result)
        this.setState({ result })
      } else {
        this.setState({ result })
      }
    } else if (e.target.name === 'C') {
      this.setState({ result: '' })
    }
    console.log(this.state.result)
  }

  render() {
    return (
      <div>
        <video autoPlay loop muted className="video">
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
