import './InputUpload.css'

export default class InputUpload extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <React.Fragment>
        hola
        <button> 
          <i className="fa fa-search btn-icon" aria-hidden="true"></i>
          Buscar Archivo
        </button>
        <button> 
          <i className="fa fa-upload btn-icon" aria-hidden="true"></i>
          Subir
        </button>
        <input 
          type="file"
          className=""
        />
      </React.Fragment>
    )
  }
}
