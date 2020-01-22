import './InputAutocomplete.css'
import random from '../../utils/random.jsx'

export default class InputAutocomplete extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      id: `id_${random()}`,
      value: '',
      hints: [],
      url: props.url, 
      formLabel: props.formLabel,
      hintsWidth: '600px', 
      hintId: 'E',
      hintDisplay: false,
      helpText: props.helpText,
      clicked: false,
    }
    this.hintClicked = React.createRef()
    this.inputValue = React.createRef()
  }

  eraseHelperText() {
    let _this = this
    setTimeout(function(){ 
      _this.setState({
        helpText: '', 
      })
    }, 3000)
  }

  handlerKeyUp(event){
    this.setState({
      value: event.target.value
    })
    let params = {
      name: event.target.value
    }
    axios.get(
      this.state.url, {
        headers: {
          [CSRF_KEY]: CSRF,
        },
        params
      }
    ).then((resp) => {
      let hintDisplay = false
      if(resp.data.length > 0){
        hintDisplay = true
      }
      this.setState({
        hints: resp.data,
        hintsWidth: this.inputValue.current.offsetWidth,
        hintDisplay: hintDisplay,
      })
      if(resp.data.length == 0 && this.state.value.length != 0){
        this.setState({
          helpText: 'No hay coincidencias', 
          helpTextClass: 'text-warning',
        })
        this.eraseHelperText()
      }
    }).catch((error)=>{
      console.log(error);
      this.setState({
        helpText: 'Ocurrió un error en buscar coincidencias', 
        helpTextClass: 'text-danger',
      })
      this.eraseHelperText()
   });
  }

  handlerCheckIfEmpty(){
    if(this.state.value == ''){
      this.setState({
        hints: [],
        hintDisplay: false,
      })
    }
  }

  hideHints(clicked){
    if(clicked){
      if(this.hintClicked.current.innerHTML.length != 0){
        this.setState({
          hints: [],
          hintDisplay: false,
          clicked: true,
        })
      }
    }
  }

  handlerHintClick(id, name){
    console.log('click')
    this.setState({
      value: name,
      hintId: id,
    })
    this.hideHints(true)
  }

  render() {
    let hints = this.state.hints.map(hint =>
      <li 
        className="hint" 
        key={hint.id} 
        ref={this.hintClicked}
        onClick={
          () => this.handlerHintClick(hint.id, hint.name)
        }
      >
        {hint.name}
      </li>
    )
    let inputStyle = {
      width: this.state.hintsWidth,
    };
    let display = this.state.hintDisplay ? '' : 'd-none'
    return (
      <React.Fragment>
        <div className="form-group">
          <label htmlFor={this.state.id}>{this.state.formLabel}</label>
          <input 
            type="text" 
            id={this.state.id}
            value={this.state.value} 
            ref={this.inputValue}
            className="form-control"
            onChange={
              () => this.handlerKeyUp(event)
            }
            onKeyUp={
              () => this.handlerCheckIfEmpty()
            }
            onBlur={
              () => this.hideHints(false)
            }
          />
          <ul className={`${display} hint-container`} style={inputStyle} >
            {hints}   
          </ul>
          <small className={`form-text ${this.state.helpTextClass}`}>
            {this.state.helpText}
          </small>
        </div>
      </React.Fragment>
    )
  }
}
