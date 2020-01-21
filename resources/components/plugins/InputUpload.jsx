import './InputUpload.css'

export default class InputUpload extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      url: props.url, 
      fileKey: props.fileKey, 
      path: props.path, 
      url: props.url, 
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
    axios.post(this.state.url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(function (resp) {
      _this.setState({
        path: resp.data.path, 
        url: resp.data.url, 
      })
    })
    .catch(function (error) {
      console.error(error);
    })
  }

  render() {
    return (
      <React.Fragment>
        hola
        <button
          onClick={
            () => this.handlerSearchClick()
          }
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
        >  
          <i 
            className="fa fa-upload btn-icon" 
            aria-hidden="true"
          ></i>
          Subir
        </button>
        <input 
          type="file"
          className=""
          ref={this.searchClicked}
        />
      </React.Fragment>
    )
  }
}
