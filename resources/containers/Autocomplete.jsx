import PluginInputAutocomplete from '../components/plugins/InputAutocomplete.jsx'

const ContainerAutocomplete = () => 
  <React.Fragment>
    <div className="container">
      <h4>Autocomplete contra servicio REST</h4>
      <p><label>Distrito</label></p>
      <PluginInputAutocomplete url={BASE_URL + 'district/search'}/>
    </div>
  </React.Fragment>

export default ContainerAutocomplete