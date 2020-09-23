import React from 'react'
import './App.css'
import Result from '../Result/Result'
import Keypad from '../Keypad/Keypad'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      result: '',
      resultEvaluated: false,
    }
  }

  handleClick = (e) => {
    const char = e.target.name
    if (char !== '=' && char !== 'C' && this.state.resultEvaluated === false) {
      //checker for not starting with a mathematical symbol
      if (this.state.result === '' && this.isMathematicalSymbol(char)) {
        this.setState({ result: '', resultEvaluated: false })
        return
      }

      //checker for not starting with double zero
      if (this.state.result === '0' && this.isNumber(char)) {
        this.setState({ result: char, resultEvaluated: false })
        return
      }

      //checker for no setting math symbols after eachother
      if (
        this.isMathematicalSymbol(this.getLastChar(this.state.result)) &&
        this.isMathematicalSymbol(char)
      ) {
        const result = this.state.result.slice(0, -1) + char
        this.setState({ result })
        return
      }

      //blocking using double dots
      if (this.state.result.includes('.') && char === '.') {
        return
      }

      //checker for a too long number
      if (this.state.result.length > 12) {
        alert('The number is too long for our tiny calculator :(')
        this.setState({ result: '' })
        return
      }
      this.setState({
        result: this.state.result + char,
        resultEvaluated: false,
      })
      return
    }

    // blocking double evaluation of result
    if (this.state.resultEvaluated === true && char === '=') {
      this.clear()
      return
    }

    //checker for deviding by zero
    if (char === '=' && this.state.result.includes('/0') === true) {
      alert("You can't divide by 0!!!")
      this.clear()
      return
    }

    //resetting the result after evaluation
    if (this.state.resultEvaluated === true && this.isNumber(char)) {
      this.setState({ result: char, resultEvaluated: false })
      return
    }

    //allowing to add math symbol after the result
    if (
      this.isMathematicalSymbol(char) &&
      this.state.resultEvaluated === true
    ) {
      this.setState({
        result: this.state.result + char,
        resultEvaluated: false,
      })
      return
    }

    //result count + rounding to 5 decimals
    if (char === '=') {
      this.calculateResult()
      return
    }

    if (char === 'C') {
      this.clear()
      return
    }
  }

  getLastChar(text) {
    return text.slice(text.length - 1)
  }

  isMathematicalSymbol(char) {
    const mathematicalSymbols = ['*', '/', '-', '+', '-', '.']
    if (mathematicalSymbols.includes(char)) return true
    else return false
  }

  isNumber(char) {
    if (!isNaN(char)) return true
    else return false
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
      return
    }

    if (this.isMathematicalSymbol(this.getLastChar(this.state.result))) {
      alert('You forgot to finish the equation!')
      return
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
