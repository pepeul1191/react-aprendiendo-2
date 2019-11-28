import ChildComp  from './ChildComp.jsx'

class ParentComp extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      parentName: 'Papaito',
    }
    this.greetParent = this.greetParent.bind(this);
  }

  greetParent(){
    // alert('Hello ' + this.state.parentName)
    alert(`Hello ${this.state.parentName}`)
  }

  render() {
    return (
      <div>
        {/*<Demo />*/}
        hola desde el parent
        <ChildComp />
      </div>
    )
  }
}

export default ParentComp;