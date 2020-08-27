import React, { Component } from 'react'
import './App.css'

export default class Keypad extends Component {
  render() {
    // dlaczego jak zostawiam pustego buttona to rozjezdza mi sie caly uklad?
    return (
      <div className="keypad">
        <button name="1">1</button>
        <button name="2">2</button>
        <button name="3">3</button>
        <button name="x">x</button>
        <button name="4">4</button>
        <button name="5">5</button>
        <button name="6">6</button>
        <button name="/">/</button>
        <button name="7">7</button>
        <button name="8">8</button>
        <button name="9">9</button>
        <button name="-">-</button>
        <button className="blackButton">x</button>
        <button name="0">0</button>
        <button name=".">.</button>
        <button name="+">+</button>
        <button name="C">C</button>
        <button className="blackButton">x </button>
        <button className="blackButton">x</button>

        <button name="=">=</button>
      </div>
    )
  }
}
