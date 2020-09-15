import React, { Component } from 'react'
import './Result.css'

export default class Result extends Component {
  render() {
    return (
      <div className="result">
        <h1 style={{ paddingRight: 5 }}>{this.props.result}</h1>
      </div>
    )
  }
}
