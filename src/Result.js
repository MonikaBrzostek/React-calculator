import React, { Component } from 'react'

export default class Result extends Component {
  render() {
    return (
      <div
        style={{
          border: '2px solid white',
          backgroundColor: 'black',
          color: 'white',
          textAlign: 'right',
          fontSize: 20,
          height: 100,
          width: 320,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 50,
        }}
      >
        <h1 style={{ paddingRight: 5 }}>{this.props.result}</h1>
      </div>
    )
  }
}
