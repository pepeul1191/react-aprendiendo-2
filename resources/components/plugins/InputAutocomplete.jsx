import './InputAutocomplete.css'

export default class PluginsInputAutocomplete extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value: '',
      hints: [],
      url: props.url, 
      hintWidth: '300px', 
      hintId: 'E',
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
      this.setState({
        hints: resp.data
      })
    }).catch((error)=>{
      console.log(error);
   });
  }

  handlerCheckIfEmpty(){
    if(this.state.value == ''){
      this.setState({
        hints: []
      })
    }
  }

  handlerHintClick(hintId){
    this.setState({
      hintId: hintId,
      hints: [],
      value: this.hintClicked.current.innerHTML
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
      width: this.state.hintWidth,
    };
    return (
      <React.Fragment>
        <input 
          type="text" 
          value={this.state.value}           
          onChange={
            () => this.handlerKeyUp(event)
          }
          onKeyUp={
            () => this.handlerCheckIfEmpty(event)
          }
        />
        <ul className="hint-container" style={inputStyle} >
          {hints}   
        </ul>
      </React.Fragment>
    )
  }
}
