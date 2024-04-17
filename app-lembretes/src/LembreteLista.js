import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class LembreteLista extends Component {
  render() {
    return (
      <div className="flex-grow-1">
        <div className="text-bg-primary rounded text-center m-3 p-2">
          {this.props.lembrete}
        </div>
      </div>
    )
  }
}
