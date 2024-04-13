import 'bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from 'react-dom'
import LembreteEntrada from './LembreteEntrada'

const App = () => {
    return <div className="container border mt-2">
        <LembreteEntrada />
    </div>
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)