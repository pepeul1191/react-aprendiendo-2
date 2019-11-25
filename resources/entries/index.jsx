import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route} from 'react-router-dom'
import { Demo } from '../components/Demo.jsx'
import { Welcome }  from '../components/Welcome.jsx'
import { Greet }  from '../components/Greet.jsx'
import { Bye }  from '../components/Bye.jsx'
import { NavigationBar }  from '../components/navigation/Bar.jsx'
import { ContainerHome } from '../containers/Home.jsx'
import { ContainerAbout } from '../containers/About.jsx'
import { ContainerContact } from '../containers/Contact.jsx'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <NavigationBar />
        {/* router */}
        <Route exact path="/" component={ContainerHome} />
        <Route path="/about" component={ContainerAbout} />
        <Route path="/contact" component={ContainerContact} />
        {/* XD */}
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
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)
