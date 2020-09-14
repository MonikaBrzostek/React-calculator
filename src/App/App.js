import React from 'react'
import './App.css'
import Result from '../Result/Result'
import Keypad from '../Keypad/Keypad'

//Things to change.
// block mathematical sign after each other

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      result: '',
      resultEvaluated: false,
    }
  }

  handleClick = (e) => {
    const result = this.state.result
    if (
      e.target.name !== '=' &&
      e.target.name !== 'C' &&
      this.state.resultEvaluated === false
    ) {
      if (
        //checker for not starting with a mathematical symbol
        this.state.result === '' &&
        (e.target.name === '*' ||
          e.target.name === '/' ||
          e.target.name === '-' ||
          e.target.name === '+')
      ) {
        this.setState({ result: '', resultEvaluated: false })
      } else if (
        //checker for not starting with double zero
        this.state.result === '0' &&
        (e.target.name === '0' ||
          e.target.name === '1' ||
          e.target.name === '2' ||
          e.target.name === '3' ||
          e.target.name === '4' ||
          e.target.name === '5' ||
          e.target.name === '6' ||
          e.target.name === '7' ||
          e.target.name === '8' ||
          e.target.name === '9')
      ) {
        this.setState({ result: e.target.name, resultEvaluated: false })
      } else if (
        (result.slice(result.length - 1) === '/' ||
          result.slice(result.length - 1) === '*' ||
          result.slice(result.length - 1) === '+' ||
          result.slice(result.length - 1) === '-') &&
        (e.target.name === '/' ||
          e.target.name === '*' ||
          e.target.name === '-' ||
          e.target.name === '+')
      ) {
        console.log('Too many mathematical signs in a row')
      } else if (this.state.result.length > 12) {
        //checker for a too long number
        alert('The number is too long for our tiny calculator :(')
        this.setState({ result: '' })
      } else {
        const result = this.state.result + e.target.name
        this.setState({ result, resultEvaluated: false })
      }
    } else if (
      //checker for deviding by zero
      e.target.name === '=' &&
      this.state.result.includes('/0') === true
    ) {
      alert("You can't divide by 0!!!")
      this.clear()
    } else if (
      //resetting the result after evaluation
      this.state.resultEvaluated === true &&
      (e.target.name === '0' ||
        e.target.name === '1' ||
        e.target.name === '2' ||
        e.target.name === '3' ||
        e.target.name === '4' ||
        e.target.name === '5' ||
        e.target.name === '6' ||
        e.target.name === '7' ||
        e.target.name === '8' ||
        e.target.name === '9')
    ) {
      this.setState({ result: e.target.name, resultEvaluated: false })
    } else if (e.target.name === '=') {
      //result count + rounding to 5 decimals
      this.calculateResult()
    } else if (e.target.name === 'C') {
      this.clear()
    }
    // console.log(this.state.result)
  }

  numberOfDecimals(number) {
    const decimals = number.toString().split('.')[1]
    if (decimals) return decimals.length
    return 0
  }

  calculateResult() {
    const result = this.state.result
    if (result === '') {
      console.log('The result is empty')
    } else if (
      result.slice(result.length - 1) === '/' ||
      result.slice(result.length - 1) === '*' ||
      result.slice(result.length - 1) === '+' ||
      result.slice(result.length - 1) === '-'
    ) {
      alert('You forgot to finish the equation!')
    } else {
      let result = eval(this.state.result)
      if (this.numberOfDecimals(result) > 5) {
        result = result.toFixed(5)
      }
      this.setState({ result: result, resultEvaluated: true })
    }
  }

  clear() {
    this.setState({ result: '', resultEvaluated: false })
  }

  render() {
    return (
      <div className="container">
        <div className="calculator">
          <Result result={this.state.result} />
          <Keypad handleClick={this.handleClick} />
        </div>
      </div>
    )
  }
}

export default App
