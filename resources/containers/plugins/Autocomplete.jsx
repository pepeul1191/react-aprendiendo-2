import InputAutocomplete from '../../components/plugins/InputAutocomplete.jsx'

const ContainerAutocomplete = () => 
  <React.Fragment>
    <div className="container">
      <h4>Autocomplete contra servicio REST</h4>
      <div className="row">
        <div className="col-md-3">
          <InputAutocomplete 
            url={BASE_URL + 'district/search'} 
            formLabel='Distrito'
          />
        </div>
      </div>
    </div>
  </React.Fragment>

export default ContainerAutocomplete