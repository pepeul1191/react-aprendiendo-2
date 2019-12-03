class Dog extends React.Component {
  constructor(props){
    super(props)
    this.dog = props.dog
  }

  render() {
    return (
      <div>
        {this.dog.name}
      </div>
    )
  }
}

export default Dog

