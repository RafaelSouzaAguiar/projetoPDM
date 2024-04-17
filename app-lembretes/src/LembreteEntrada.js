import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class LembreteEntrada extends Component {
  limpaCampo = () => {
    const texto = document.getElementById("campo").value
    texto ?
      this.props.obterTexto(document.getElementById("campo").value) :
      alert("O campo está vazio")
    document.getElementById("campo").value = ""
  }

  render() {
    return (
      <div className="container border mt-2 mb-2">
        <div className="row text-center">
          <div className="col-12">
            <input type="text" placeholder='Digite seu novo lembrete'
              className='form-control mt-2 mb-2 w-100' id='campo' />
            <button type="button" className="btn btn-outline-primary w-100 mb-2"
              onClick={() => this.limpaCampo()}>
              OK
            </button>
          </div>
        </div>
      </div>
    )
  }
}