import './InputUpload.css'

export default class InputUpload extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      urlREST: props.urlREST, 
      fileKey: props.fileKey, 
      path: props.path, 
      url: props.url, 
      helpText: props.helpText,
      helpTextClass: props.helpTextClass,
      maxSize: props.maxSize, // bytes
      extensions: props.extensions,
    }
    this.searchClicked = React.createRef()
  }

  handlerSearchClick() {
    this.searchClicked.current.click()
  }

  eraseHelperText() {
    let _this = this
    setTimeout(function(){ 
      _this.setState({
        helpText: '', 
      })
    }, 3000)
  }

  handlerUploadClick() {
    let formData = new FormData()
    let file = this.searchClicked.current.files[0]
    // check if file is selected
    if (file !== undefined){
      // check file size
      if(file.size < this.state.maxSize){
        // check file extension
        if(this.state.extensions.includes(file.type)){
          formData.append(this.state.fileKey, file)
          let _this = this
          this.setState({
            helpText: 'Subiendo ...', 
            helpTextClass: 'text-info',
          })
          axios.post(this.state.urlREST, formData, {
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
            _this.eraseHelperText()
          })
          .catch(function (error) {
            console.error(error);
            _this.setState({
              path: null, 
              url: null, 
              helpText: 'Ocurrió un error en subir el archivo', 
              helpTextClass: 'text-danger',
            })
            _this.eraseHelperText()
          })
        }else{
          // ELSE: check file extension
          this.setState({
            path: null, 
            url: null, 
            helpText: 'Extensión de archivo no válida', 
            helpTextClass: 'text-danger',
          })
          this.eraseHelperText()
        }
      }else{
        // ELSE: check file size
        this.setState({
          path: null, 
          url: null, 
          helpText: 'Tamaño del archivo supera el máximo permitido', 
          helpTextClass: 'text-danger',
        })
        this.eraseHelperText()
      }
    }else{
      // ELSE: check if file is selected
      this.setState({
        path: null, 
        url: null, 
        helpText: 'Debe de seleccionar un archivo', 
        helpTextClass: 'text-warning',
      })
      this.eraseHelperText()
    }
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
