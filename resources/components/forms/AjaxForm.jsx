import './AjaxForm.css'
import random from '../../utils/random.jsx'

export default class AjaxForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      id: `id_${random()}`,
      urlREST: props.urlREST, 
      fileKey: props.fileKey, 
      path: props.path, 
      url: props.url, 
      helpText: props.helpText,
      helpTextClass: props.helpTextClass,
      maxSize: props.maxSize, // bytes
      extensions: props.extensions,
    }
  }

  eraseHelperText() {
    let _this = this
    setTimeout(function(){ 
      _this.setState({
        helpText: '', 
      })
    }, 3000)
  }

  render() {
    return (
      <React.Fragment>
        
      </React.Fragment>
    )
  }
}
