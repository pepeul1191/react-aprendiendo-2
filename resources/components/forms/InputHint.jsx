import './InputHint.css'

export default class InputHint extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      id: props.id,
      name: props.name,
    }
    this.searchClicked = React.createRef()
  }

  handlerHintClick(id, name){
    this.setState({
      value: name,
      hintId: id,
    })
  }

  render() {
    return (
      <React.Fragment key={this.state.id}>
        <li 
          className="hint" 
          onClick={
            () => this.handlerHintClick()
          }
        >
          {this.state.name}
        </li>
      </React.Fragment>
    )
  }
}
