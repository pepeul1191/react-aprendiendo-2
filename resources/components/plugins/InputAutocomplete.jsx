import './InputAutocomplete.css'

export default class PluginInputAutocomplete extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value: '',
      hints: [],
      url: props.url, 
      hintsWidth: '600px', 
      hintId: 'E',
      hintDisplay: false,
    }
    this.hintClicked = React.createRef()
    this.inputValue = React.createRef()
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
    }).catch((error)=>{
      console.log(error);
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

  handlerCheckIfEmpty(){
    if(this.state.value == ''){
      this.setState({
        hints: [],
        hintDisplay: false,
      })
    }
  }

  hideHints(hintId){
    this.setState({
      hints: [],
      hintDisplay: false,
    })
  }

  render() {
    let hints = this.state.hints.map(hint =>
      <li 
        className="hint" 
        key={hint.id} 
        ref={this.hintClicked}
        onClick={
          () => this.handlerHintClick(hint.id)
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
        <input 
          type="text" 
          value={this.state.value} 
          ref={this.inputValue}
          onChange={
            () => this.handlerKeyUp(event)
          }
          onKeyUp={
            () => this.handlerCheckIfEmpty()
          }
          onBlur={
            () => this.hideHints()
          }
        />
        <ul className={`${display} hint-container`} style={inputStyle} >
          {hints}   
        </ul>
      </React.Fragment>
    )
  }
}
