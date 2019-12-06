import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { NavigationBar }  from '../components/navigation/Bar.jsx'
import { ContainerHome } from '../containers/Home.jsx'
import { ContainerAbout } from '../containers/About.jsx'
import { ContainerContact } from '../containers/Contact.jsx'
import ContainerAutocomplete from '../containers/Autocomplete.jsx'

class App extends React.Component {
  render() {
    return (
      <Router>
        <NavigationBar />
        {/* router */}
        <Switch>
          <Route exact path="/" component={ContainerHome} />
          <Route path="/about" component={ContainerAbout} />
          <Route path="/contact" component={ContainerContact} />
          <Route path="/plugins/autocomplete" component={ContainerAutocomplete} />
        </Switch>
        {/* XD */}
      </Router>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)
