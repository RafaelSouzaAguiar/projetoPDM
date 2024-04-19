import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import LembreteEntrada from './LembreteEntrada'
import LembreteLista from './LembreteLista'

class App extends React.Component {
  state = {
    lista: []
  }

  obterTexto = (texto) => {
    const newLista = this.state.lista
    newLista.push(texto)
    this.setState({
      lista: newLista
    })
  }

  render() {
    return (
      <div className="container border mt-2">
        <h1 className="text-center m-2">Meus lembretes</h1>
        <div className="container border mt-2 mb-2">
          <div className="row">
            {
              this.state.lista[0] ? (
                this.state.lista.map((lembrete) => (
                  <LembreteLista
                    lembrete={lembrete} />
                ))
              ) : (
                <div className="align-items-center text-center m-2">Nenhum lembrete criado</div>
              )
            }
          </div>
        </div>

        <LembreteEntrada
          obterTexto={this.obterTexto}
          lista={this.state.lista} />
      </div>
    )
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)