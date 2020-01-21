import './InputUpload.css'

export default class InputUpload extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      url: props.url, 
      fileKey: props.fileKey, 
      path: props.path, 
      url: props.url, 
      helpText: props.helpText,
      helpTextClass: props.helpTextClass,
    }
    this.searchClicked = React.createRef()
  }

  handlerSearchClick() {
    this.searchClicked.current.click()
  }

  handlerUploadClick() {
    let formData = new FormData()
    let file = this.searchClicked.current
    formData.append(this.state.fileKey, file.files[0])
    let _this = this
    this.setState({
      helpText: 'Subiendo ...', 
      helpTextClass: 'text-info',
    })
    axios.post(this.state.url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(function (resp) {
      _this.setState({
        path: resp.data.path, 
        url: resp.data.url, 
        helpText: 'Archivo subido con éxito', 
        helpTextClass: 'text-success',
      })
      setTimeout(function(){ 
        _this.setState({
          helpText: '', 
        })
      }, 3000)
    })
    .catch(function (error) {
      console.error(error);
      _this.setState({
        path: null, 
        url: null, 
        helpText: 'Ocurrió un error en subir el archivo', 
        helpTextClass: 'text-danger',
      })
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="form-group form-upload">
          <label>Imagen de Perfil</label>
          <br></br>
          <button
            onClick={
              () => this.handlerSearchClick()
            }
            className="btn btn-secondary"
          > 
            <i 
              className="fa fa-search btn-icon" 
              aria-hidden="true"
            ></i>
            Buscar Archivo
          </button>
          <button
            onClick={
              () => this.handlerUploadClick()
            }
            className="btn btn-primary"
          >  
            <i 
              className="fa fa-picture-o btn-icon" 
              aria-hidden="true"
            ></i>
            Subir
          </button>
          <input 
            type="file"
            className="d-none"
            ref={this.searchClicked}
          />
          {(this.state.path != null && this.state.url != null) &&
            <a 
              target="_blank" 
              href={`${this.state.url}${this.state.path}`}
              className="btn btn-success"
            >
              <i 
                className="fa fa-upload btn-icon" 
                aria-hidden="true"
              ></i>
              Ver Archivo
            </a>
          }
          <small className={`form-text ${this.state.helpTextClass}`}>
            {this.state.helpText}
          </small>
        </div>
      </React.Fragment>
    )
  }
}
