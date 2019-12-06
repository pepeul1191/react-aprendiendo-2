export default class PluginsInputAutocomplete extends React.Component {
  constructor(){
    super()
    this.state = {
      value: '',
      hints: [],
    }
  }

  handlerKeyUp(event){
    this.setState({
      value: event.target.value
    })
    let params = {
      name: event.target.value
    }
    axios.get(
      BASE_URL + 'district/search', {
        headers: {
          [CSRF_KEY]: CSRF,
        },
        params
      })
      .then(res => {
        this.state.hints = res.data
      }
    )
  }

  handlerCheckIfEmpty(){
    if(this.state.value == ''){
      this.setState({
        hints: []
      })
    }
  }

  render() {
    let hints = this.state.hints.map(hint => 
      <li key={hint.id}>{hint.name}</li>
    )
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
        <ul>
          {hints}     
        </ul>
      </React.Fragment>
    )
  }
}
