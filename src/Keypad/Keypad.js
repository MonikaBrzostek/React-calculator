import React, { Component } from 'react'
import './Keypad.css'

export default class Keypad extends Component {
  render() {
    // dlaczego jak zostawiam pustego buttona to rozjezdza mi sie caly uklad?
    // dlaczego tak wyglada onClick?
    return (
      <div className="keypad">
        <button name="1" onClick={this.props.handleClick}>
          1
        </button>
        <button name="2" onClick={this.props.handleClick}>
          2
        </button>
        <button name="3" onClick={this.props.handleClick}>
          3
        </button>
        <button name="*" onClick={this.props.handleClick}>
          x
        </button>
        <button name="4" onClick={this.props.handleClick}>
          4
        </button>
        <button name="5" onClick={this.props.handleClick}>
          5
        </button>
        <button name="6" onClick={this.props.handleClick}>
          6
        </button>
        <button name="/" onClick={this.props.handleClick}>
          /
        </button>
        <button name="7" onClick={this.props.handleClick}>
          7
        </button>
        <button name="8" onClick={this.props.handleClick}>
          8
        </button>
        <button name="9" onClick={this.props.handleClick}>
          9
        </button>
        <button name="-" onClick={this.props.handleClick}>
          -
        </button>
        <button className="blackButton"></button>
        <button name="0" onClick={this.props.handleClick}>
          0
        </button>
        <button name="." onClick={this.props.handleClick}>
          .
        </button>
        <button name="+" onClick={this.props.handleClick}>
          +
        </button>
        <button name="C" onClick={this.props.handleClick}>
          C
        </button>
        <button
          className="blackButton"
          onClick={this.props.handleClick}
        ></button>
        <button
          className="blackButton"
          onClick={this.props.handleClick}
        ></button>

        <button name="=" onClick={this.props.handleClick}>
          =
        </button>
      </div>
    )
  }
}
