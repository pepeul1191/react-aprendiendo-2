class UserGreeting extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
       isLoggedIn: false,
    }
  }
  

  render() {
    // conditional method 1
    /*
    if(this.state.isLoggedIn){
      return (
        <div>
          <h1>Bienvenida Sila</h1>
        </div>
      )
    }else{
      return (
        <div>
          <h1>Bienvenido Pepis</h1>
        </div>
      )
    }
    */
    // conditional method 2
    /*
    let message
    if(this.state.isLoggedIn){
      message = (
        <h1>Bienvenida Sila</h1>
      )
    }else{
      message = (
        <h1>Bienvenido Pepis</h1>
      )
    }
    return (
      <div>{message}</div>
    )
    */
    // conditional method 3
    let message 
    this.state.isLoggedIn ? (
      message = (
        <h1>Bienvenida Sila</h1>
      )
    ) : (
      message = (
        <h1>Bienvenido Pepis</h1>
      )
    )
    return (
      <div>{message}</div>
    )
  }
}

export default UserGreeting