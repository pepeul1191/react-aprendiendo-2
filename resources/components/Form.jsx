class Form extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      userName: 'hola',
      comments: '',
      topic: 1,
    }
  }

  handlerUserNameChange(event) {
    // console.log(event.target.value)
    this.setState({
      userName: event.target.value
    })
  }

  handlerCommentsChange(event){
    // console.log(event.target.value)
    this.setState({
      comments: event.target.value
    })
  }

  handlerTopicChange(event){
    // console.log(event.target.value)
    this.setState({
      topic: event.target.value
    })
  }

  handlerSubmit(event){
    alert(`
      ${this.state.userName}, ${this.state.comments}, ${this.state.topic}
    `)
    event.preventDefault()
  }

  render() {
    // console.log(this.state.userName)
    return (
      <form 
        onSubmit={() => this.handlerSubmit(event)}
      >
        <h1>v21 - Basics of Form Handling</h1>
        <label>Nombre</label>
        <input 
          type="text" 
          value={this.state.userName} 
          onChange={
            () => this.handlerUserNameChange(event)
          } 
        />
        <textarea 
          cols="30" 
          rows="10" 
          value={this.state.comments} 
          onChange={
            () => this.handlerCommentsChange(event)
          } 
        ></textarea>
        <select 
          value={this.state.topic} 
          onChange={
            () => this.handlerTopicChange(event)
          }
        >
          <option value="1">Vue</option>
          <option value="2">Backbone</option>
          <option value="3">Angular</option>
        </select>
        <button type="submit">Envisarsh</button>
      </form>
    )
  }
}

export default Form