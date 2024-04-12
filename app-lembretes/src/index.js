import 'bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from 'react-dom'

const App = () => {
    return <div className="container border mt-2">
        <div className="row">
            <div className="col-12">
                <h1 className="text-center">Hello, lembretes</h1>
            </div>
        </div>
    </div>
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)