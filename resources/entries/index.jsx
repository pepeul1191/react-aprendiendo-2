import { Demo } from '../components/Demo.jsx'
import { Welcome }  from '../components/Welcome.jsx'
import { Greet }  from '../components/Greet.jsx'
import { Bye }  from '../components/Bye.jsx'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>titulo</h1>
        <Demo />
        <Demo />
        <Welcome />
        <Greet name="Pepito" age="31" />
        <Greet name="Yacky" age="29" />
        <Greet name="Sila" age="2" />
        <hr/>
        <Bye name="Pepito" age="31" />
        <Bye name="Yacky" age="29" />
        <Bye name="Sila" age="2" />
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)
