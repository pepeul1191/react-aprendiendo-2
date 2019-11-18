import { Demo } from '../components/Demo.jsx'
import { Welcome }  from '../components/Welcome.jsx'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>titulo</h1>
        <Demo />
        <Demo />
        <Welcome />
      </div>
    );
  }
}

ReactDOM.render(
  <App/>, 
  document.getElementById('root')
)
