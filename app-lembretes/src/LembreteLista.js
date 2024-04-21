import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class LembreteLista extends Component {
  render() {
    return (
      <div className="row">
        {
          this.props.lista[0] ? (
            this.props.lista.map((lembrete) => (
              <div className="flex-grow-1 col-sm-12 col-md-6 col-xl-4 col-xxl-3">
                <div className="text-bg-primary rounded text-center m-3 p-2">
                  {lembrete}
                </div>
              </div>
            ))
          ) : (
            <div className="align-items-center text-center m-2">Nenhum lembrete criado</div>
          )
        }
      </div>

    )
  }
}
