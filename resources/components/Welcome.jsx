class Welcome extends React.Component {
  constructor(){
    super()
    this.state = {
      message: 'Bienvenido Oe',
      count: 0,
    }
  }

  changeMessage(){
    this.setState({
      message: 'Gracias por suscribirse OE',
      count: this.state.count + 1
    },() => {
      console.log('valor cambiado, nuevo valor es ' + this.state.count);
    })
  }

  render() {
    return (
      <div>
        <h1>welcome =), {this.state.message}, {this.state.count}</h1>
        <button onClick={() => this.changeMessage()}>Suscribirse</button>
      </div>
    )
  }
}

module.exports = {
  Welcome, 
}